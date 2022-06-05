import { combineReducers } from '@reduxjs/toolkit';
import { computationsReducer } from './computations';
import { loadingReducer } from './loading';
import { tableReducer } from './table';
import { settingsReducer } from './settings';

export const createRootReducer = () =>
    combineReducers({
        computationsReducer,
        loadingReducer,
        tableReducer,
        settingsReducer
    });
