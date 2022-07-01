import BN from 'bn.js'

import { AN_HOUR, A_DAY, A_MINUTE, A_SECOND, SECONDS_PER_BLOCK } from '../constants'
import { isDefined, isNumber } from '../utils'

const NUMBER_SEPARATOR_REG_EXP = /\B(?=(\d{3})+(?!\d))/g

export const formatTokenValue = (value: BN | number | string | undefined | null) => {
  if (!isDefined(value) || value === null || Number.isNaN(value)) {
    return '-'
  }
  if (typeof value !== 'string') {
    value = new BN(value || 0).toString()
  }
  return value.replace(NUMBER_SEPARATOR_REG_EXP, ',')
}

export function shortenAddress(address: string, length = 18) {
  return length >= address.length
    ? address
    : address.substring(0, Math.ceil(length / 2)) +
        '...' +
        address.substring(address.length - Math.floor(length / 2), address.length)
}

const DefaultDateFormatter = Intl.DateTimeFormat('en', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  hour12: true,
  timeZoneName: 'short',
})

export const formatDateString = (timestamp: string, size: 's' | 'l' = 'l') => {
  const defaultFormat = DefaultDateFormatter.format(new Date(timestamp))
  switch (size) {
    case 's':
      return defaultFormat.replace(/ ([AP]M)/, (_, preriod: string) => preriod.toLocaleLowerCase())
    default:
      return defaultFormat
  }
}

type TimeUnit = [number, Intl.RelativeTimeFormatUnit]
const defaultDurationUnits: TimeUnit[] = [
  [A_DAY, 'day'],
  [AN_HOUR, 'hour'],
  [A_MINUTE, 'minute'],
]
export const durationFormatter =
  (units = defaultDurationUnits) =>
  (duration: number | BN) =>
    splitDuration(units)(Math.abs(isNumber(duration) ? duration : duration.toNumber()))
      .flatMap(([duration, unit]) => (duration ? formatDurationUnit(duration, unit) : []))
      .join(' ') || 'none'

const formatDurationUnit = (duration: number, unit: Intl.RelativeTimeFormatUnit) =>
  duration.toLocaleString('en', { style: 'unit', unit, unitDisplay: 'long' })

export const MILLISECONDS_PER_BLOCK = A_SECOND * SECONDS_PER_BLOCK
export const formatBlocksToDuration = durationFormatter([
  [A_DAY / MILLISECONDS_PER_BLOCK, 'day'],
  [AN_HOUR / MILLISECONDS_PER_BLOCK, 'hour'],
  [A_MINUTE / MILLISECONDS_PER_BLOCK, 'minute'],
])

export const splitDuration =
  <T extends any>(units: [number, T][]) =>
  (duration: number): [number, T][] => {
    if (!units.length) return []
    const [[unitValue, unitName], ...submultiples] = units
    const amount = Math.floor(duration / unitValue)
    return [[amount, unitName], ...splitDuration(submultiples)(duration - amount * unitValue)]
  }

const UNIT_VALUE = new BN(10000000000) // Will be 10,000M in Carthage
const MIN_VALUE = new BN(100000000) // Will be 100M in Carthage
const INT_VALUE = UNIT_VALUE.div(MIN_VALUE)
const MIN_DEC = 1 / INT_VALUE.toNumber()

// This function doesn't work (try to display value : 6.06)
// export const formatJoyValue = (value: BN) => {
//   if (value.isZero()) {
//     return '0'
//   } else if (value.gte(MIN_VALUE)) {
//     const base = value.div(MIN_VALUE)
//     const intPart = base.div(INT_VALUE)
//     const decPart = base.sub(intPart.mul(INT_VALUE))
//     return `${formatTokenValue(intPart)}.${decPart}`
//   }
//   if (value.lt(MIN_VALUE)) {
//     return `> ${MIN_DEC}`
//   }
// }

const DECIMAL_PLACES = 10 // Will be 10,000M in Carthage
const PRECISION = 2 // Will be 100M in Carthage

export const formatJoyValue = (value: BN, precision: number = PRECISION) => {
  const stringValue = value.toString(10)

  if (stringValue.length < DECIMAL_PLACES - precision + 1) {
    return '< 0.' + '1'.padStart(precision, '0')
  }

  const result = stringValue.padStart(DECIMAL_PLACES + 1, '0')
  const comma = result.length - DECIMAL_PLACES

  return result.substring(0, comma) + '.' + result.substring(comma, comma + precision)
}
