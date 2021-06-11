import {combineReducers,createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {logReducer,countriesReducer} from './reducers/logReducer'
// import {countriesReducer} from './reducers/countriesActions'



const root = {
    log : logReducer,
    countries : countriesReducer
}

const configureStore =()=>{
    const store = createStore(combineReducers(root),applyMiddleware(thunk))
    return store

}

export default configureStore