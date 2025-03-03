import React from 'react'

import { useMyAccounts } from '@/accounts/hooks/useMyAccounts'
import { useMyTotalBalances } from '@/accounts/hooks/useMyTotalBalances'
import { Account } from '@/accounts/types'
import { useApi } from '@/common/hooks/useApi'
import { useLocalStorage } from '@/common/hooks/useLocalStorage'
import { OnBoardingContext } from '@/common/providers/onboarding/context'
import { UseOnBoarding } from '@/common/providers/onboarding/types'
import { useMyMemberships } from '@/memberships/hooks/useMyMemberships'

interface Props {
  children: React.ReactNode
}

export const OnBoardingProvider = (props: Props) => {
  return <OnBoardingContext.Provider value={{ ...useOnBoarding() }}>{props.children}</OnBoardingContext.Provider>
}

const hasAccount = (allAccounts: Account[], address: string) => {
  return !!allAccounts.find((account) => account.address === address)
}

const useOnBoarding = (): UseOnBoarding => {
  const { isConnected } = useApi()
  const { isLoading: isLoadingAccounts, error: accountsError, hasAccounts, allAccounts } = useMyAccounts()
  const { total: totalBalance } = useMyTotalBalances()
  const { isLoading: isLoadingMembers, hasMembers } = useMyMemberships()
  const [membershipAccount, setMembershipAccount] = useLocalStorage<string | undefined>('onboarding-membership-account')

  if (!isConnected || isLoadingAccounts || isLoadingMembers) {
    return { isLoading: true }
  }

  if (totalBalance.gtn(0)) {
    return { isLoading: false, status: 'finished' }
  }

  if (accountsError === 'EXTENSION') {
    return { isLoading: false, status: 'installPlugin' }
  }

  if (!hasMembers && (!hasAccounts || !membershipAccount || !hasAccount(allAccounts, membershipAccount))) {
    return { isLoading: false, status: 'addAccount', setMembershipAccount }
  }

  if (!hasMembers && membershipAccount && hasAccount(allAccounts, membershipAccount)) {
    return { isLoading: false, status: 'createMembership', membershipAccount, setMembershipAccount }
  }

  return { isLoading: false, status: 'finished' }
}
