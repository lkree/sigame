import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { selectLeadTeam, selectTeamsCount } from './selectors';
import { setActions } from '../../../misc/hooks';

const getData = <T extends (state: any) => any>(
    stateFunction: Function, selector: T
): ReturnType<T> => selector(stateFunction());

const MAX_TEAMS_COUNT = 4;
const MIN_TEAMS_COUNT = 2;

export const setTeamsCount = createAsyncThunk('SET_TEAMS_COUNT', (newCount: number, { getState, dispatch }) => {
    const currentCount = getData(getState, selectTeamsCount);

    if (newCount === currentCount) return;
    newCount = Math.min(MAX_TEAMS_COUNT, Math.max(MIN_TEAMS_COUNT, newCount));

    const isAddTeams = newCount > currentCount;

    for (
        let i = isAddTeams ? currentCount : newCount, resultValue = isAddTeams ? newCount : currentCount;
        i < resultValue;
        ++i
    ) isAddTeams ? dispatch(addTeam()) : dispatch(removeTeam());

    const currentLeadTeam = getData(getState, selectLeadTeam);

    if (currentLeadTeam >= newCount) dispatch(setLeadTeam(newCount));
});
export const addTeam = createAction('ADD_TEAM');
export const removeTeam = createAction('REMOVE_TEAM');
export const editTeams = createAction<{ value: string | number, id: number }>('EDIT_TEAMS');
export const setLeadTeam = createAsyncThunk('SET_LEAD_TEAM', (teamLeadNumber: number, { getState }) =>
    Math.min(
        getData(getState, selectTeamsCount),
        Math.max(teamLeadNumber, 1)
    )
);
export const resetTeamData = createAction('RESET_TEAM_DATA');

export const useSettingsActions = setActions({ setTeamsCount, addTeam, removeTeam, editTeams, setLeadTeam, resetTeamData });
