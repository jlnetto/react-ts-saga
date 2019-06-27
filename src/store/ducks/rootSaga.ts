import { all, takeLatest } from 'redux-saga/effects'

import { RepositoriesTypes } from './repositories/types'
import { fetchRepositories } from './repositories/sagas'

export default function* rootSaga() {
  return yield all([
    takeLatest(RepositoriesTypes.LOAD_REQUEST, fetchRepositories)
  ])
}