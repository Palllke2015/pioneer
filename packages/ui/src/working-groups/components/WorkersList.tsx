import React from 'react'

import { CountBadge } from '@/common/components/CountBadge'
import { ContentWithTabs, RowGapBlock } from '@/common/components/page/PageContent'
import { Label } from '@/common/components/typography'
import { Member } from '@/memberships/types'

import { Worker } from './Worker'

export interface WorkersListProps {
  leader?: Member
  workers?: Member[]
}

export const WorkersList = ({ leader, workers }: WorkersListProps) => {
  return (
    <RowGapBlock gap={36}>
      {leader && (
        <ContentWithTabs>
          <Label>Leader</Label>
          <Worker member={leader} isLeader={true} />
        </ContentWithTabs>
      )}
      <ContentWithTabs>
        <Label>
          Workers <CountBadge count={workers?.length ?? 0} />{' '}
        </Label>
        {workers && (
          <ContentWithTabs>
            {workers.map((member) => (
              <Worker key={member.handle} member={member} />
            ))}
          </ContentWithTabs>
        )}
      </ContentWithTabs>
    </RowGapBlock>
  )
}