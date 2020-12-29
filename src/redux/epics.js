import { combineEpics, ofType } from 'redux-observable'
import serviceMethod from '../service/fetch-users'
import { loadUsers, loadUsersError, loadUsersSuccess } from './actions'
import { mergeMap, map, catchError } from 'rxjs/operators'
import { from, of } from 'rxjs'

const fetchUsersEpic = (action$) =>
  action$.pipe(
    ofType(loadUsers),
    mergeMap(() =>
      from(serviceMethod()).pipe(
        map(
          (response) => loadUsersSuccess(response),
          catchError((err) => of(loadUsersError(err)))
        )
      )
    )
  )

export const rootEpic = combineEpics(fetchUsersEpic)