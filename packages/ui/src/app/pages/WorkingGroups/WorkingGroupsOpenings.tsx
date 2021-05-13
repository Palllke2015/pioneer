import BN from 'bn.js'
import React, { useState } from 'react'

import { ButtonPrimary } from '@/common/components/buttons'

import { useTotalBalances } from '../../../accounts/hooks/useTotalBalances'
import { ActivitiesBlock } from '../../../common/components/Activities/ActivitiesBlock'
import { Loading } from '../../../common/components/Loading'
import {
  ContentWithSidepanel,
  ContentWithTabs,
  MainPanel,
  SidePanel,
} from '../../../common/components/page/PageContent'
import { PageHeader } from '../../../common/components/page/PageHeader'
import { PageTitle } from '../../../common/components/page/PageTitle'
import { MultiTokenValueStat, StatisticItem, Statistics, TokenValueStat } from '../../../common/components/statistics'
import { Tabs } from '../../../common/components/Tabs'
import { useActivities } from '../../../common/hooks/useActivities'
import { useModal } from '../../../common/hooks/useModal'
import { MemberRoles } from '../../../memberships/components/MemberRoles'
import { useMyMemberships } from '../../../memberships/hooks/useMyMemberships'
import { SwitchMemberModalCall } from '../../../memberships/modals/SwitchMemberModal'
import { OpeningsList } from '../../../working-groups/components/OpeningsList'
import { useOpenings } from '../../../working-groups/hooks/useOpenings'
import { AppPage } from '../../components/AppPage'

import { WorkingGroupsTabs } from './components/WorkingGroupsTabs'

type OpeningsTabs = 'OPENINGS' | 'UPCOMING'

export const WorkingGroupsOpenings = () => {
  const { isLoading, openings } = useOpenings({ type: 'open' })
  const activities = useActivities()
  const { active } = useMyMemberships()
  const { locked } = useTotalBalances()
  const { showModal } = useModal()

  const earnings = {
    day: new BN(200),
    month: new BN(102_000),
  }

  const [activeTab, setActiveTab] = useState<OpeningsTabs>('OPENINGS')

  const openingsTabs = [
    {
      title: 'Openings',
      active: activeTab === 'OPENINGS',
      onClick: () => setActiveTab('OPENINGS'),
      count: openings.length,
    },
    {
      title: 'Upcoming openings',
      active: activeTab === 'UPCOMING',
      onClick: () => setActiveTab('UPCOMING'),
      count: 0,
    },
  ]

  return (
    <AppPage>
      <PageHeader>
        <PageTitle>Working Groups</PageTitle>
        <WorkingGroupsTabs />
      </PageHeader>
      <ContentWithSidepanel>
        <MainPanel>
          <Statistics>
            <StatisticItem title="My Roles">
              {active ? (
                <MemberRoles member={active} size="l" max={6} />
              ) : (
                <ButtonPrimary size="small" onClick={() => showModal<SwitchMemberModalCall>({ modal: 'SwitchMember' })}>
                  Select membership
                </ButtonPrimary>
              )}
            </StatisticItem>
            <TokenValueStat title="Currently staking" value={locked} />
            <MultiTokenValueStat
              title="Earned in past"
              values={[
                { label: '24 hours', value: earnings.day },
                { label: 'Month', value: earnings.month },
              ]}
            />
          </Statistics>
          <ContentWithTabs>
            <Tabs tabsSize="xs" tabs={openingsTabs} />
            {isLoading ? <Loading /> : <OpeningsList openings={activeTab === 'OPENINGS' ? openings : []} />}
          </ContentWithTabs>
        </MainPanel>
        <SidePanel>
          <ActivitiesBlock activities={activities} label="Working Groups Activities" />
        </SidePanel>
      </ContentWithSidepanel>
    </AppPage>
  )
}