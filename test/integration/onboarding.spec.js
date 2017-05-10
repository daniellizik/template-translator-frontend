import { story, regression, step7regression } from '~/test/storyFixtures/onboarding'
import * as config from '~/src/components/clause/settings/config'

describe('step 0', () => {
  it('should be at step 0', () => {
    expect(story[0].onboarding.step).toBe(0)
  })
  it('overlay should be visible', () => {
    expect(story[0].overlay).toBeTruthy()
  })
})

describe('step 1', () => {
  it('should be at step 1', () => {
    expect(story[1].onboarding.step).toBe(1)
  })
  it('overlay should be visible', () => {
    expect(story[2].overlay).toBeTruthy()
  })
})

describe('step 2', () => {
  it('should be at step 2', () => {
    expect(story[2].onboarding.step).toBe(2)
  })
  it('should insert sample email url', () => {
    expect(story[2].source.url).toBe('/www/sample-email.html')
    expect(story[2].source.lastModified).toBe('url')
  })
})

describe('step 3', () => {
  it('should be at step 3', () => {
    expect(story[3].onboarding.step).toBe(3)
  })
  it('overlay should be hidden',() => {
    expect(story[3].overlay).toBeFalsy()
  })
  it('should have no clauses', () => {
    expect(story[3].clauses.length).toBe(0)
  })
  it('should have xml tree', () => {
    expect(story[3].slave.xml.length).toBeGreaterThan(100)
  })
})

describe('step 4', () => {
  it('should be at step 4', () => {
    expect(story[4].onboarding.step).toBe(4)
  })
  it('overlay should be hidden',() => {
    expect(story[4].overlay).toBeFalsy()
  })
  it('should have one clause', () => {
    expect(story[4].clauses.length).toBe(1)
  })
  it('should have xml tree', () => {
    expect(story[4].slave.xml.length).toBeGreaterThan(100)
  })
  it('should no queries', () => {
    expect(story[4].clauses[0].queries.length).toBe(0)
  })
  it('should have no mutations', () => {
    expect(story[4].clauses[0].mutations.length).toBe(0)
  })
})

describe('step 5', () => {
  it('should be at step 5', () => {
    expect(story[5].onboarding.step).toBe(5)
  })
  it('should not have any queries or mutations', () => {
    expect(story[5].clauses[0].queries.length).toBe(0)
    expect(story[5].clauses[0].mutations.length).toBe(0)
  })
})

describe('step 6', () => {
  it('should be at step 6', () => {
    expect(story[6].onboarding.step).toBe(6)
  })
  it('should have one clause', () => {
    expect(story[6].clauses.length).toBe(1)
  })
  it('should have one query and no mutations', () => {
    expect(story[6].clauses[0].queries.length).toBe(1)
    expect(story[6].clauses[0].mutations.length).toBe(0)
  })
})

describe('step 7a, 7b, 7c, 7 regression', () => {
  it('should be at step 7, since step 7 incorporates several actions', () => {
    expect(story[7].onboarding.step).toBe(7)
  })
  it('should not be at step 8', () => {
    expect(story[8].onboarding.step).not.toBe(8)
  })
  it('should not be at step 9', () => {
    expect(story[9].onboarding.step).not.toBe(9)
  })
  it('should have items in view', () => {
    expect(story[9].clauses[0].view.length).toBeGreaterThan(10)
  })
  it('should have updated query 0 target value', () => {
    expect(story[9].clauses[0].queries[0].targetValue).toBe('tr')
  })
  it('should trigger step 8 on multiple query actions if view is found', () => {
    expect(step7regression[3].clauses[0].view.length).toBe(1)
    expect(step7regression[3].onboarding.step).toBe(8)
  })
})

describe('step 8', () => {
  it('should trigger step 8 when view has items', () => {
    expect(story[9].onboarding.step).toBe(8)
  })
})

describe('step 9', () => {
  it('should step 9 after mutation is added', () => {
    expect(story[10].onboarding.step).toBe(9)
  })
})

describe('step 10', () => {
  it('should be step 10', () => {
    expect(story[11].onboarding.step).toBe(10)
  })
  it('should allow user to change the first mutation rule value many times', () => {
    expect(story[12].clauses[0].mutations[0].ruleValue).toBe('a')
    expect(story[13].clauses[0].mutations[0].ruleValue).toBe('ab')
    expect(story[14].clauses[0].mutations[0].ruleValue).toBe('abc')
    expect(story[15].clauses[0].mutations[0].ruleValue).toBe('abcd')
  })
  it('should proceed to step 11 when user has entered 4 characters', () => {
    expect(story[15].onboarding.step).toBe(11)
  })
  it('should prevent user from removing queries or mutations', () => {
    expect(regression[6].clauses[0].queries.length).toBe(1)
    expect(regression[6].clauses[0].mutations.length).toBe(1)
  })
  it('should prevent user from adding queries or mutations', () => {
    expect(regression[6].clauses[0].queries.length).toBe(1)
    expect(regression[6].clauses[0].mutations.length).toBe(1)
  })
  it('should prevent user from modifying query', () => {
    expect(regression[7].clauses[0].queries[0].targetValue).toBe(regression[6].clauses[0].queries[0].targetValue)
  })
})

describe('step 11', () => {
  it('should be at step 11', () => {
    expect(story[15].onboarding.step).toBe(11)
  })
  it('should not have mutated first rule value from step 10', () => {
    expect(story[15].clauses[0].mutations[0].ruleValue).toBe('abcd')
  })
})

describe('step 12', () => {
  const s = story[16]
  it('should be at step 12', () => {
    expect(s.onboarding.step).toBe(12)
  })
  it('should have view', () => {
    expect(s.clauses[0].view.length).toBeGreaterThan(0)
  })
  it('should have mutated', () => {
    expect(s.slave.mutated.length).toBeGreaterThan(0)
  })
  it('should not allow users to modify anything before adding another clause', () => {
    regression.slice(9, 15).forEach(({clauses, slave, source, onboarding}) => {
      expect(s.clauses.length).toBe(clauses.length)
      s.clauses.forEach((c, i) => {
        expect(c).toMatchObject(clauses[i])
      })
      expect(s.onboarding).toMatchObject(onboarding)
      expect(s.source).toMatchObject(source)
      expect(s.slave.mutated).toMatchObject(slave.mutated)
      expect(s.slave.ast.length).toBe(slave.ast.length)
      expect(s.slave.list.list.length).toBe(slave.list.list.length)
    })
  })
})

describe('step 13', () => {
  const [s0, s1, s2, s3, s4, s5] = story.slice(16)
  it('should be at step 13', () => {
    expect(s1.onboarding.step).toBe(13)
  })
  it('should add a second clause', () => {
    expect(s1.clauses.length).toBe(2)
  })
  it('should add default clause this time instead of blank one', () => {
    expect(s1.clauses[1]).toMatchObject(config.defaultClause)
  })
  it('should only move to step 14 once user has added second clause with valid view with mutation', () => {
    expect(s5.onboarding.step).toBe(14)
  })
})

describe('overlay regressions', () => {
  it('source setter modal should not be visible', () => {
    expect(regression[1].overlay).toBeFalsy()
  })
  it('overlay should not be visible', () => {
    expect(regression[1].source.active).toBeFalsy()
  })
})

