import React, { useEffect, useReducer, useState } from 'react'

import { MainPanel } from '@/common/components/page/PageContent'
import { PageHeader } from '@/common/components/page/PageHeader'
import { PageTitle } from '@/common/components/page/PageTitle'
import { Pagination } from '@/common/components/Pagination'
import { MemberList } from '@/memberships/components/MemberList'
import { MemberListEmptyFilter, MemberListFilters } from '@/memberships/components/MemberListFilters'
import { memberRoleAbbreviation, memberRoleTitle } from '@/memberships/helpers'
import { DefaultMemberListOrder, MemberListOrder, MemberListSortKey, useMembers } from '@/memberships/hooks/useMembers'

import { AppPage } from '../../components/AppPage'

const sortReducer = (order: MemberListOrder, sortBy: MemberListSortKey): MemberListOrder => ({
  sortBy: sortBy,
  isDescending: sortBy === order.sortBy && !order.isDescending,
})

export const Members = () => {
  const [filter, setFilter] = useState(MemberListEmptyFilter)
  const [order, dispatchSort] = useReducer(sortReducer, DefaultMemberListOrder)

  const [page, setPage] = useState(1)
  useEffect(() => {
    setPage(1)
  }, [filter, order])

  const { members, isLoading, totalCount, pageCount } = useMembers({ order, filter, page })

  const roles: { [key: string]: string } = {}
  for (const member of members) {
    for (const role of member.roles) {
      roles[memberRoleTitle(role)] = memberRoleAbbreviation(role)
    }
  }

  return (
    <AppPage>
      <PageHeader>
        <PageTitle>Members</PageTitle>
      </PageHeader>
      <MainPanel>
        <MemberListFilters memberCount={totalCount} roles={roles} onApply={setFilter} />
        <MemberList isLoading={isLoading} members={members} order={order} onSort={dispatchSort} />
        {!isLoading && !!pageCount && pageCount > 1 && (
          <Pagination pageCount={pageCount} handlePageChange={setPage} page={page} />
        )}
      </MainPanel>
    </AppPage>
  )
}