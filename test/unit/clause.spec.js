import { defaultMutation } from '~/src/components/clause/settings/config'
import * as constants from '~/src/components/clause/constants'
import {
  removingAClause
} from '~/test/storyFixtures/clause'

describe('removing a clause', () => {
  it('should set active clause to 0 if first clause is removed', () => {
    expect(removingAClause[5].activeClause).toBe(0)
  })
  it('should set active clause to last if last clause is removed', () => {
    expect(removingAClause[6].activeClause).toBe(1)
    expect(removingAClause[6].clauses.length).toBe(2)
  })
  it('should set active clause to previous if clause removed is not first or last', () => {
    expect(removingAClause[9].activeClause).toBe(1)
  })
  it('should set active clause to -1 if no more clauses left', () => {
    expect(removingAClause[12].activeClause).toBe(-1)
  })
})