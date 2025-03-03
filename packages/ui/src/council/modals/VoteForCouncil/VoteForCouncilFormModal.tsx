import BN from 'bn.js'
import React, { useCallback, useEffect } from 'react'
import styled from 'styled-components'
import { Event, EventData } from 'xstate/lib/types'
import * as Yup from 'yup'

import { StakeStep } from '@/accounts/components/StakeStep'
import { useBalance } from '@/accounts/hooks/useBalance'
import { Account } from '@/accounts/types'
import { ButtonPrimary } from '@/common/components/buttons'
import { Arrow } from '@/common/components/icons'
import { Modal, ModalFooter, ModalHeader, ScrollableModalColumn, ScrolledModalBody } from '@/common/components/Modal'
import { useModal } from '@/common/hooks/useModal'
import { useSchema } from '@/common/hooks/useSchema'
import { BNSchema, minContext } from '@/common/utils/validation'
import { useCandidate } from '@/council/hooks/useCandidate'
import { useMyCastVotes } from '@/council/hooks/useMyCastVotes'
import { VoteForCouncilEvent, VoteForCouncilMachineState } from '@/council/modals/VoteForCouncil/machine'
import { IStakingAccountSchema, StakingAccountSchema } from '@/memberships/model/validation'

import { CandidacyReview } from './components/CandidacyReview'
import { VoteForCouncilModalCall } from './types'

export interface VoteForCouncilFormModalProps {
  minStake: BN
  send: (event: Event<VoteForCouncilEvent>, payload?: EventData | undefined) => void
  state: VoteForCouncilMachineState
}

const StakeStepFormSchema = Yup.object().shape({
  account: StakingAccountSchema.required(),
  stake: BNSchema.test(minContext('You need at least ${min} stake', 'minStake')).required(),
})

interface IFormContext extends IStakingAccountSchema {
  minStake: BN
}

export const VoteForCouncilFormModal = ({ minStake, send, state }: VoteForCouncilFormModalProps) => {
  const { hideModal, modalData } = useModal<VoteForCouncilModalCall>()
  const { candidate } = useCandidate(modalData.id)
  const { isValid, setContext, errors } = useSchema<IFormContext>({ ...state?.context }, StakeStepFormSchema)
  const { votes } = useMyCastVotes(candidate?.cycleId)

  const stakingAccountBalance = useBalance(state.context.account?.address)

  const alreadyVotedAccounts = votes?.map(({ castBy }) => castBy)
  const accountsFilter = useCallback(
    ({ address }: Account) => !!alreadyVotedAccounts && !alreadyVotedAccounts.includes(address),
    [alreadyVotedAccounts?.length]
  )

  useEffect(() => {
    if (stakingAccountBalance) {
      setContext({
        minStake,
        stakingStatus: 'confirmed',
        balances: stakingAccountBalance,
        stakeLock: 'Voting',
        requiredAmount: state.context.stake ?? minStake,
      })
    }
  }, [JSON.stringify(stakingAccountBalance), state.context.stake, minStake])

  return (
    <Modal onClose={hideModal} modalSize="l" modalHeight="xl">
      <ModalHeader onClick={hideModal} title="Vote for council" />
      <VoteForCouncilModalBody>
        <CandidacyReview candidate={candidate} minStake={minStake} state={state} />
        <ScrollableModalColumn>
          <StakeStep
            stakeLock="Voting"
            minStake={minStake}
            accountsFilter={accountsFilter}
            send={send}
            state={state}
            errors={errors}
          />
        </ScrollableModalColumn>
      </VoteForCouncilModalBody>
      <ModalFooter>
        <ButtonPrimary disabled={!isValid} onClick={() => send('PASS')} size="medium">
          Next step
          <Arrow direction="right" />
        </ButtonPrimary>
      </ModalFooter>
    </Modal>
  )
}

const VoteForCouncilModalBody = styled(ScrolledModalBody)`
  flex-direction: row;
`
