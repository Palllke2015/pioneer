import BN from 'bn.js'
import React from 'react'
import styled, { css } from 'styled-components'

import { Skeleton } from '@/common/components/Skeleton'
import { isDefined } from '@/common/utils'

import { Colors, Fonts } from '../../constants'
import { formatTokenValue } from '../../model/formatters'

interface ValueSizingProps {
  size?: 's' | 'm' | 'l'
}

interface ValueProps extends ValueSizingProps {
  value?: BN | number | null
  className?: string
  isLoading?: boolean
}

export const TokenValue = React.memo(({ className, value, size, isLoading }: ValueProps) => {
  if (isLoading) {
    return <Skeleton id="tokenValueSkeleton" variant="rect" height="32px" width="50%" />
  }

  if (value === null || !isDefined(value)) {
    return <span>-</span>
  }

  return (
    <ValueInJoys className={className} size={size}>
      {formatTokenValue(value)}
    </ValueInJoys>
  )
})

export const ValueInJoys = styled.span<ValueSizingProps>`
  display: inline-grid;
  position: relative;
  grid-auto-flow: column;
  grid-column-gap: 4px;
  align-items: baseline;
  width: fit-content;
  font-weight: 700;
  color: ${Colors.Black[900]};
  font-family: ${Fonts.Grotesk};

  &:after {
    content: 'tJOY';
    display: inline-block;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    color: ${Colors.Black[400]};
    font-family: ${Fonts.Grotesk};
  }

  ${({ size }) => {
    switch (size) {
      case 's': {
        return css`
          font-size: 16px;
          :after {
            font-size: 14px;
          }
        `
      }
      case 'm': {
        return css`
          font-size: 18px;
          :after {
            font-size: 14px;
          }
        `
      }
      case 'l': {
        return css`
          font-size: 20px;
          :after {
            font-size: 16px;
          }
        `
      }
      default:
        break
    }
  }}
`
