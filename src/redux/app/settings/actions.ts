import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { setActions } from '../../../misc/hooks';
import { selectTeamsCount } from './selectors';

const getData = <T extends (state: any) => any>(
    stateFunction: Function, selector: T
): ReturnType<T> => selector(stateFunction());

const MAX_TEAMS_COUNT = 4;
const MIN_TEAMS_COUNT = 2;

export const setTeamsCount = createAsyncThunk('SET_TEAMS_COUNT', (value: number, { getState, dispatch }) => {
    const currentTeamsCount = getData(getState, selectTeamsCount);

    if (value === currentTeamsCount) return;
    value = Math.min(MAX_TEAMS_COUNT, Math.max(MIN_TEAMS_COUNT, value));

    const isAddTeams = value > currentTeamsCount;

    for (
        let i = isAddTeams ? currentTeamsCount : value, resultValue = isAddTeams ? value : currentTeamsCount;
        i < resultValue;
        ++i
    ) isAddTeams ? dispatch(addTeam()) : dispatch(removeTeam());
});
export const addTeam = createAction('ADD_TEAM');
export const removeTeam = createAction('REMOVE_TEAM');
export const editTeams = createAction<{ value: string | number, id: number }>('EDIT_TEAMS');

export const useTeamsActions = setActions({ setTeamsCount, addTeam, removeTeam, editTeams });
