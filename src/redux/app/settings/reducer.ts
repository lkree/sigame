import { createReducer } from '@reduxjs/toolkit';

import { addTeam, editTeams, removeTeam } from './actions';
import { TeamSettings } from './types';

const initialState = {
    teamsSettings: [
        { name: 'team0', startPoints: 0 },
        { name: 'team1', startPoints: 0 }
    ] as TeamSettings[]
};

export type ComputationStore = typeof initialState;

export const settingsReducer = createReducer(initialState, builder =>
    builder
        .addCase(addTeam, state => {
            state.teamsSettings.push({
                name: `team${state.teamsSettings.length}`,
                startPoints: 0
            });
        })
        .addCase(removeTeam, state => { state.teamsSettings.pop(); })
        .addCase(editTeams, (state, { payload: { value, id } }) => {
            if (typeof value === 'number') state.teamsSettings[id].startPoints = Math.max(value, 0);
            else state.teamsSettings[id].name = value;
        })
);
