import * as constants from '~/src/components/clause/constants'
import baseState from '~/test/stateFixtures/test'
import { queryActions, mutateActions, clauseActions, builderActions } from '~/src/components/clause/actions/index'
import reducer from '~/src/components/clause/reducers/reducer'
import { chainActions } from '~/src/util'

export const removingAClause = chainActions(
  baseState,
  reducer,
  clauseActions.add(),
  clauseActions.add(),
  clauseActions.add(),
  clauseActions.add(),
  clauseActions.remove(0),
  clauseActions.remove(2),
  clauseActions.add(),
  clauseActions.add(),
  clauseActions.remove(2),
  clauseActions.remove(0),
  clauseActions.remove(0),
  clauseActions.remove(0)
) 