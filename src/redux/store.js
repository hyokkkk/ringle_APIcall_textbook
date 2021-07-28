import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";

import reducer from './reducer'
import rootSaga from '../sagas/index'

//create saga middleware
const sagaMiddleware = createSagaMiddleware()

// mound it on the store
const store = createStore(
  reducer, 
  applyMiddleware(sagaMiddleware)
) 

// then run the saga
sagaMiddleware.run(rootSaga)

export default store