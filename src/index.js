import * as Counter from './components/counter'
import * as TwoCounters from './components/two-counters'
import * as ListCounters from './components/list-counters'
import * as ListCountersFancy from './components/list-counters-fancy'
import start from './start'

const oneCounterModel = 0
const listCounterModel = {counters: [], nextId: 1}
const listCounterFancyModel = {counters: [], nextId: 10000000}
const twoCountersModel = {topCounter: 0, bottomCounter: 0}

start(oneCounterModel, Counter, 'one-counter')

start(twoCountersModel, TwoCounters, 'two-counters')

start(listCounterModel, ListCounters, 'list-counters')

start(listCounterFancyModel, ListCountersFancy, 'list-counters-fancy')
