import { createReducer } from '@reduxjs/toolkit';
import { setIsLoading } from './actions';

const initialState = {
    isLoading: true
};

export type LoadingStore = typeof initialState;

export const loadingReducer = createReducer(initialState, builder =>
    builder
        .addCase(setIsLoading, (state, { payload }) => { state.isLoading = payload })
);
