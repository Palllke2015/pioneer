import { useMachine } from '@xstate/react'
import React, { useEffect, useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { useBalance } from '@/accounts/hooks/useBalance'
import { useMyAccounts } from '@/accounts/hooks/useMyAccounts'
import { useTransactionFee } from '@/accounts/hooks/useTransactionFee'
import { InsufficientFundsModal } from '@/accounts/modals/InsufficientFundsModal'
import { accountOrNamed } from '@/accounts/model/accountOrNamed'
import { FailureModal } from '@/common/components/FailureModal'
import { useApi } from '@/common/hooks/useApi'
import { useModal } from '@/common/hooks/useModal'
import { useYupValidationResolver } from '@/common/utils/validation'
import { useForumCategoryBreadcrumbs } from '@/forum/hooks/useForumCategoryBreadcrumbs'
import { useMyMemberships } from '@/memberships/hooks/useMyMemberships'
import { SwitchMemberModalCall } from '@/memberships/modals/SwitchMemberModal'

import { CreateThreadModalCall } from '.'
import {
  CreateThreadDetailsModal,
  CreateThreadSchema,
  formDefaultValues,
  ThreadFormFields,
} from './CreateThreadDetailsModal'
import { CreateThreadSignModal } from './CreateThreadSignModal'
import { CreateThreadSuccessModal } from './CreateThreadSuccessModal'
import { createThreadMachine } from './machine'

export const CreateThreadModal = () => {
  const { active: member } = useMyMemberships()
  const { allAccounts } = useMyAccounts()
  const { showModal, hideModal, modalData } = useModal<CreateThreadModalCall>()
  const [state, send] = useMachine(createThreadMachine)
  const { api } = useApi()
  const { breadcrumbs } = useForumCategoryBreadcrumbs(modalData.categoryId)
  const balance = useBalance(member?.controllerAccount)

  const postDeposit = useMemo(() => api?.consts.forum.postDeposit.toBn(), [api])
  const threadDeposit = useMemo(() => api?.consts.forum.threadDeposit.toBn(), [api])

  const baseTransaction = api?.tx.forum.createThread(member?.id ?? 0, modalData.categoryId, '', '', null)
  const baseTransactionFee = useTransactionFee(member?.controllerAccount, baseTransaction)
  const minimumTransactionCost = useMemo(
    () => postDeposit && threadDeposit && baseTransactionFee?.transactionFee.add(postDeposit).add(threadDeposit),
    [postDeposit, threadDeposit, baseTransactionFee?.transactionFee.toString()]
  )

  const form = useForm<ThreadFormFields>({
    resolver: useYupValidationResolver(CreateThreadSchema),
    mode: 'onChange',
    defaultValues: formDefaultValues,
  })

  useEffect(() => {
    if (state.matches('requirementsVerification')) {
      if (!member) {
        showModal<SwitchMemberModalCall>({
          modal: 'SwitchMember',
          data: {
            originalModalData: modalData,
            originalModalName: 'CreateThreadModal',
          },
        })
      } else if (balance && minimumTransactionCost) {
        const canAfford = balance.transferable.gte(minimumTransactionCost)
        const controllerAccount = accountOrNamed(allAccounts, member.controllerAccount, 'Controller Account')
        canAfford && send({ type: 'PASS', memberId: member.id, categoryId: modalData.categoryId, controllerAccount })
        canAfford || send('FAIL')
      }
    }

    if (state.matches('beforeTransaction') && balance && minimumTransactionCost) {
      const canAfford = balance.transferable.gte(minimumTransactionCost)
      send(canAfford ? 'PASS' : 'FAIL')
    }
  }, [state.value, member?.id, minimumTransactionCost, balance])
  if (state.matches('generalDetails') && member) {
    return (
      <FormProvider {...form}>
        <CreateThreadDetailsModal breadcrumbs={breadcrumbs} author={member} send={send} />
      </FormProvider>
    )
  }

  if (state.matches('transaction') && api && postDeposit && threadDeposit) {
    const { topic, description } = form.getValues()
    const { memberId, categoryId, controllerAccount } = state.context
    const transaction = api.tx.forum.createThread(memberId, categoryId, topic, description, null)
    const service = state.children.transaction
    return (
      <CreateThreadSignModal
        transaction={transaction}
        service={service}
        controllerAccount={controllerAccount}
        postDeposit={postDeposit}
        threadDeposit={threadDeposit}
      />
    )
  }

  if (state.matches('success')) {
    return <CreateThreadSuccessModal newThreadId={state.context.newThreadId.toString()} />
  }

  if (state.matches('error')) {
    return (
      <FailureModal onClose={hideModal} events={state.context.transactionEvents}>
        There was a problem with creating your forum thread.
      </FailureModal>
    )
  }

  if (state.matches('requirementsFailed') && member && minimumTransactionCost) {
    return (
      <InsufficientFundsModal onClose={hideModal} address={member.controllerAccount} amount={minimumTransactionCost} />
    )
  }

  return null
}
