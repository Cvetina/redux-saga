import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from "redux-saga";
import reducer from "../reducers/reducer";
import { rootSaga } from "./saga";


const rootReducer = combineReducers({reducer})
const sagaMiddlewere = createSagaMiddleware();

export const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddlewere)
)
sagaMiddlewere.run(rootSaga);
