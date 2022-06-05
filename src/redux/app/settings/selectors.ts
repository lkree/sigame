import { createSelector } from '@reduxjs/toolkit';

import { ComputationStore } from './reducer';
import type { StoreState } from '../store';

export const getState = (state: StoreState): ComputationStore => state.settingsReducer;

export const selectTeamsCount = createSelector(getState, state => state.teamsSettings.length);
export const selectTeamsSettings = createSelector(getState, state => state.teamsSettings);
