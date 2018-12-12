import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import user from '../reducers/user'
import sagas from '../sagas/sagas'

const sagaMiddleware = createSagaMiddleware()
const reducers = combineReducers({
    user
})
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(sagas)

export default store