import { createSelector } from '@reduxjs/toolkit';
import type { StoreState } from '../store';
import { ComputationStore } from './reducer';

export const getState = (state: StoreState): ComputationStore => state.computationsReducer;

export const selectValue = createSelector(getState, state => state.value);
