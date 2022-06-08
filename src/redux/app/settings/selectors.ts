import { createSelector } from '@reduxjs/toolkit';

import { ComputationStore } from './reducer';

export const getState = (state: any): ComputationStore => state.settingsReducer;

export const selectTeamsCount = createSelector(getState, state => state.teamsSettings.length);
export const selectTeamsSettings = createSelector(getState, state => state.teamsSettings);
export const selectLeadTeam = createSelector(getState, state => state.leadTeam);
