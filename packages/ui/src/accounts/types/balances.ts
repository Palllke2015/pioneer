import BN from 'bn.js'

import { Address } from '@/common/types'

/**
 * The default Polkadot lock ("staking ")
 */
type PolkadotStakingLock = 'Staking'
type PolkadotVestingLock = 'Vesting'

export const WorkerLocks = [
  'Storage Worker',
  'Content Directory Worker',
  'Forum Worker',
  'Membership Worker',
  'Gateway Worker',
  'Builders Worker',
  'HR Worker',
  'Marketing Worker',
  'Distribution Worker',
] as const

export type WorkerLockType = typeof WorkerLocks[number]

export type LockType =
  | PolkadotStakingLock
  | PolkadotVestingLock
  | WorkerLockType
  | 'Voting'
  | 'Council Candidate'
  | 'Councilor'
  | 'Validation'
  | 'Nomination'
  | 'Proposals'
  | 'Invitation'
  | 'Bound Staking Account'
  | 'Bounties'

export interface BalanceLock {
  amount: BN
  type: LockType
}

export interface Balances {
  total: BN
  locked: BN
  recoverable: BN
  transferable: BN
  locks: BalanceLock[]
}

export type AddressToBalanceMap = {
  [key in Address]: Balances
}
