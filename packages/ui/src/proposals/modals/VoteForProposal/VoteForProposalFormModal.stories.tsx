import { Meta, Story } from '@storybook/react'
import React from 'react'
import { MemoryRouter } from 'react-router'

import { MockApolloProvider } from '@/mocks/components/storybook/MockApolloProvider'
import rawProposals from '@/mocks/data/raw/proposals.json'
import { ProposalWithDetails } from '@/proposals/types'

import { VoteForProposalModalForm } from './VoteForProposalModalForm'

export default {
  title: 'Proposals/VoteForProposal/VoteForProposalModalForm',
  component: VoteForProposalModalForm,
  argTypes: {
    send: { action: 'send' },
  },
} as Meta

const Template: Story = ({ send }) => {
  return (
    <MemoryRouter>
      <MockApolloProvider>
        <VoteForProposalModalForm
          context={{}}
          send={send}
          proposal={rawProposals[0] as unknown as ProposalWithDetails}
        />
      </MockApolloProvider>
    </MemoryRouter>
  )
}

export const Default = Template.bind({})
