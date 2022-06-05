import { createReducer, AnyAction, PayloadAction } from '@reduxjs/toolkit';
import { add, reduce, sagaAction } from './actions';

const initialState = {
    value: 0
};

export type ComputationStore = typeof initialState;

const isActionWithFirstPayload = (
    action: AnyAction
): action is PayloadAction<'first'> =>
    typeof action.payload === 'string' && Boolean(action.payload.match('first'));

const isActionWithSecondPayload = (
    action: AnyAction
): action is PayloadAction<'second'> =>
    typeof action.payload === 'string' && Boolean(action.payload.match('second'));

export const computationsReducer = createReducer(initialState, builder =>
    builder
        .addCase(add, state => { state.value++ })
        .addCase(reduce, state => { state.value-- })
        .addCase(sagaAction, state => {})
        .addMatcher(isActionWithFirstPayload, () => console.log('first!'))
        .addMatcher(isActionWithSecondPayload, () => console.log('second!'))
        .addDefaultCase(() => { console.log('default computation case'); })
);
