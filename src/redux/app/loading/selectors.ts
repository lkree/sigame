import { createSelector } from '@reduxjs/toolkit';
import type { StoreState } from '../store';
import { LoadingStore } from './reducer';

export const getState = (state: StoreState): LoadingStore => state.loadingReducer;

export const selectIsLoading = createSelector(getState, state => state.isLoading);
