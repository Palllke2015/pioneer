import * as Yup from 'yup'

import { minContext } from '@/common/utils/validation'
import { AccountSchema, StakingAccountSchema } from '@/memberships/model/validation'
import { ApplicationQuestion } from '@/working-groups/types'

export const validationSchemaFromQuestions = (questions: ApplicationQuestion[]) => {
  const shapeDefinition = questions.reduce(
    (schema, question, index) => ({
      [`question${index}`]: Yup.string().required(),
      ...schema,
    }),
    {}
  )

  return Yup.object().shape(shapeDefinition)
}

export const baseSchema = Yup.object().shape({
  stake: Yup.object().shape({
    account: StakingAccountSchema.required(),
    roleAccount: AccountSchema.required(),
    rewardAccount: AccountSchema.required(),
    amount: Yup.number().test(minContext('You need at least ${min} stake', 'minStake')).required('Amount is required'),
  }),
  form: Yup.object().shape({}),
})
