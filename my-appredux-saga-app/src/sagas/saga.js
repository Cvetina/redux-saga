
import { put, takeLatest } from 'redux-saga/effects';
import { GET_USERS } from '../reducers/reducer';
import { getUsersData } from '../Api/Api';
import * as actions from '../reducers/reducer';

export function* logingSaga (){
    console.log("loging when GET_USERS action is dispatched.")
}

export function* fetchUsers (){
        try {
            const response = yield getUsersData();
            yield  put(actions.updateUsers(response));
          } catch (error) {
            yield  put(actions.updateError(error.response.data.message));
          }
}

export function* rootSaga (){
    yield takeLatest(GET_USERS, logingSaga)
    yield takeLatest(GET_USERS, fetchUsers)
}