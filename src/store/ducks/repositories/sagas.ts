import { call, put } from 'redux-saga/effects'
import api from '../../../services/api'
import { loadSuccess, loadFail } from '../repositories/actions'

export function* fetchRepositories() {
  try {
    const response = yield call(api.get, 'users/jlnetto/repos')

    yield put(loadSuccess(response.data))
  } catch (err) {
    yield put(loadFail())
  }
}