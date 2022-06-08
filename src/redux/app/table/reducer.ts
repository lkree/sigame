import { createReducer } from '@reduxjs/toolkit';

import { setQuestions, setCurrentQuestion, removeQuestion } from './actions';
import { Questions, Question } from './types';
import { isEqual } from 'lodash';

const initialState = {
    questions: {} as Questions,
    currentQuestion: null as null | Question
};

export type ComputationStore = typeof initialState;

export const tableReducer = createReducer(initialState, builder =>
    builder
        .addCase(setQuestions, (state, { payload }) => { state.questions = payload; })
        .addCase(setCurrentQuestion, (state, { payload }) => { state.currentQuestion = payload })
        .addCase(removeQuestion, state => {
            state.questions.data.level0 = state.questions.data.level0.map(theme => {
                theme.questions.map((q) => {
                    if (isEqual(q, state.currentQuestion)) q.enabled = false;

                    return q;
                });

                return theme;
            });

            return state;
        })
);
