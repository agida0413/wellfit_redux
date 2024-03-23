import {configureStore} from "@reduxjs/toolkit";
import thunk from 'redux-thunk' // 미들웨어 / 비동기
import rootReducer from '../reducers/index'
import {createLogger} from "redux-logger/src"

const logger=createLogger()
const middleware=[thunk,logger]
const store=configureStore({
    reducer:rootReducer,
    devTools:window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
})
export default store