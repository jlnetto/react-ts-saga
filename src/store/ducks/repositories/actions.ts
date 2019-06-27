import { action } from 'typesafe-actions'
import { RepositoriesTypes, Repository } from './types'

export const loadRequest = () => action(RepositoriesTypes.LOAD_REQUEST)

export const loadSuccess = (data: Repository[]) => action(RepositoriesTypes.LOAD_SUCCESS, data)

export const loadFail = () => action(RepositoriesTypes.LOAD_FAIL)