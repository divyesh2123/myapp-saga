import { createStore } from "redux";

import counterReducer from "../reducer/counterReducer";
import thunk from 'redux-thunk';
import { applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../saga/rootsaga";
import rootReducer from "../reducer/rootReducer";


const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);


sagaMiddleware.run(rootSaga);



  export default store;