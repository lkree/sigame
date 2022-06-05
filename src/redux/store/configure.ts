import { createLogger } from 'redux-logger';
import immutableState from 'redux-immutable-state-invariant';
import { configureStore, Reducer } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

export default (reducer: Reducer) =>
    configureStore({
        reducer,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware().concat(thunk, createLogger({ collapsed: true }), immutableState())
    });
