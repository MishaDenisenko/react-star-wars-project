import {configureStore, applyMiddleware} from '@reduxjs/toolkit';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {setLocalStorage} from '../utils/localStorage';

import reducer from './reducers/index';


const store = configureStore({
    reducer: reducer,
    devTools: composeWithDevTools(applyMiddleware(thunk))
});

store.subscribe(() => setLocalStorage('store', store.getState()['favoriteReducer']))

export default store