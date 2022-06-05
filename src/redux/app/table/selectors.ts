import { createSelector } from '@reduxjs/toolkit';
import type { StoreState } from '../store';
import { ComputationStore } from './reducer';

export const getState = (state: StoreState): ComputationStore => state.tableReducer;

export const selectQuestions = createSelector(getState, state => state.questions);
export const selectCurrentQuestion = createSelector(getState, state => state.currentQuestion);
