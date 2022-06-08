import { createReducer } from '@reduxjs/toolkit';

import { addTeam, editTeams, removeTeam, resetTeamData, setLeadTeam } from './actions';
import { TeamSettings } from './types';

const DEFAULT_IMG = 'https://cataas.com/cat?width=200&height=200';

const getRandomPictureUrl = () => `${DEFAULT_IMG}&a=${Math.random()}`;

const initialState = {
    teamsSettings: [
        { name: 'team0', points: 0, img: getRandomPictureUrl() },
        { name: 'team1', points: 0, img: getRandomPictureUrl() }
    ] as TeamSettings[],
    leadTeam: 1
};

export type ComputationStore = typeof initialState;

export const settingsReducer = createReducer(initialState, builder =>
    builder
        .addCase(addTeam, state => {
            state.teamsSettings.push({
                name: `team${state.teamsSettings.length}`,
                points: 0,
                img: getRandomPictureUrl()
            });
        })
        .addCase(removeTeam, state => { state.teamsSettings.pop(); })
        .addCase(editTeams, (state, { payload: { value, id } }) => {
            if (typeof value === 'number') state.teamsSettings[id].points = Math.max(value, 0);
            else state.teamsSettings[id].name = value;
        })
        .addCase(setLeadTeam.fulfilled, (state, { payload }) => { state.leadTeam = payload })
        .addCase(resetTeamData, state => ({ ...state, teamsSettings: initialState.teamsSettings }))
);
