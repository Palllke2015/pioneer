import React, { useEffect, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import * as Yup from 'yup'

import { ButtonPrimary } from '@/common/components/buttons'
import { InputComponent, InputText, InputTextarea } from '@/common/components/forms'
import { LinkSymbol } from '@/common/components/icons/symbols'
import {
  ModalFooter,
  ModalHeader,
  ScrolledModal,
  ScrolledModalBody,
  ScrolledModalContainer,
  Row,
} from '@/common/components/Modal'
import { TooltipExternalLink } from '@/common/components/Tooltip'
import { TextMedium } from '@/common/components/typography'
import { useKeyring } from '@/common/hooks/useKeyring'
import { useYupValidationResolver } from '@/common/utils/validation'
import { useMyMemberships } from '@/memberships/hooks/useMyMemberships'
import { useGetMembersCountQuery } from '@/memberships/queries'

import { SelectMember } from '../../components/SelectMember'
import { AvatarURISchema, HandleSchema, MemberSchema, NewAddressSchema } from '../../model/validation'
import { MemberFormFields } from '../BuyMembershipModal/BuyMembershipFormModal'

interface InviteProps {
  onClose: () => void
  onSubmit: (params: MemberFormFields) => void
}

const InviteMemberSchema = Yup.object().shape({
  invitor: MemberSchema.required(),
  rootAccount: NewAddressSchema('rootAccount').required('This field is required'),
  controllerAccount: NewAddressSchema('controllerAccount').required('This field is required'),
  avatarUri: AvatarURISchema,
  name: Yup.string(),
  handle: HandleSchema.required('Membership handle is required'),
})

const formDefaultValues = {
  name: '',
  handle: '',
  about: '',
  avatarUri: '',
  hasTerms: false,
  invitor: undefined,
}

export const InviteMemberFormModal = ({ onClose, onSubmit }: InviteProps) => {
  const { active } = useMyMemberships()
  const keyring = useKeyring()
  const [formHandleMap, setFormHandleMap] = useState('')
  const { data } = useGetMembersCountQuery({ variables: { where: { handle_eq: formHandleMap } } })

  const form = useForm<MemberFormFields>({
    resolver: useYupValidationResolver(InviteMemberSchema),
    context: { size: data?.membershipsConnection.totalCount, keyring },
    mode: 'onChange',
    defaultValues: formDefaultValues,
  })

  const [handle, invitor, rootAccount, controllerAccount] = form.watch([
    'handle',
    'invitor',
    'rootAccount',
    'controllerAccount',
  ])

  useEffect(() => {
    if (handle) {
      setFormHandleMap(handle)
    }
  }, [handle])

  useEffect(() => {
    if (formHandleMap && (data?.membershipsConnection.totalCount || form.formState.errors.handle)) {
      form.trigger('handle')
    }
  }, [data?.membershipsConnection.totalCount])

  useEffect(() => {
    return active && form.setValue('invitor', active)
  }, [active])

  const onCreate = () => onSubmit(form.getValues())

  return (
    <ScrolledModal modalSize="m" modalHeight="m" onClose={onClose}>
      <ModalHeader onClick={onClose} title="Invite a member" />
      <ScrolledModalBody>
        <FormProvider {...form}>
          <ScrolledModalContainer>
            <InputComponent label="Inviting member" inputSize="l">
              <SelectMember
                selected={invitor}
                onChange={(member) => form.setValue('invitor', member, { shouldValidate: true })}
              />
            </InputComponent>

            <Row>
              <TextMedium dark>To invite a member please fill in all the details below.</TextMedium>
            </Row>

            <Row>
              <InputComponent
                label="Root account"
                id="root-account"
                required
                tooltipText="Something about root accounts"
                name="rootAccount"
              >
                <InputText
                  id="root-account"
                  placeholder="Enter the account of the person being invited."
                  value={rootAccount?.address ?? ''}
                  onChange={(event) =>
                    form.setValue(
                      'rootAccount',
                      { name: undefined, address: event.target.value },
                      { shouldValidate: true }
                    )
                  }
                />
              </InputComponent>
            </Row>

            <Row>
              <InputComponent
                label="Controller account"
                id="controller-account"
                required
                tooltipText="Something about controller accounts"
                name="controllerAccount"
              >
                <InputText
                  id="controller-account"
                  placeholder="Enter the account of the person being invited."
                  value={controllerAccount?.address ?? ''}
                  onChange={(event) =>
                    form.setValue(
                      'controllerAccount',
                      { name: undefined, address: event.target.value },
                      { shouldValidate: true }
                    )
                  }
                />
              </InputComponent>
            </Row>

            <Row>
              <InputComponent
                id="member-handle"
                label="Membership handle"
                required
                tooltipText={
                  <>
                    Membership handle is the primary way of how members are displayed throughout all interfaces of the
                    platform. Membership handle can be updated any time by the account holder.
                    <TooltipExternalLink
                      target="_blank"
                      href="https://joystream.gitbook.io/testnet-workspace/system/memberships#membership"
                    >
                      Learn more <LinkSymbol />
                    </TooltipExternalLink>
                  </>
                }
                name="handle"
              >
                <InputText id="member-handle" placeholder="Type" name="handle" />
              </InputComponent>
            </Row>

            <Row>
              <InputComponent id="member-name" label="Member Name">
                <InputText id="member-name" placeholder="Type" name="name" />
              </InputComponent>
            </Row>

            <Row>
              <InputComponent id="member-about" label="About member" inputSize="l">
                <InputTextarea id="member-about" placeholder="Type" name="about" />
              </InputComponent>
            </Row>

            <Row>
              <InputComponent id="member-avatar" label="Member Avatar" name="avatarUri" placeholder="Image URL">
                <InputText id="member-avatar" name="avatarUri" />
              </InputComponent>
            </Row>
          </ScrolledModalContainer>
        </FormProvider>
      </ScrolledModalBody>
      <ModalFooter>
        <ButtonPrimary size="medium" onClick={onCreate} disabled={!form.formState.isValid}>
          Invite a Member
        </ButtonPrimary>
      </ModalFooter>
    </ScrolledModal>
  )
}
