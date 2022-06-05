import { createReducer } from '@reduxjs/toolkit';
import { setQuestions, setCurrentQuestion } from './actions';
import { Questions, Question } from './types';

const initialState = {
    questions: {} as Questions,
    currentQuestion: null as null | Question
};

export type ComputationStore = typeof initialState;

export const tableReducer = createReducer(initialState, builder =>
    builder
        .addCase(setQuestions, (state, action) => { state.questions = action.payload; })
        .addCase(setCurrentQuestion, (state, action) => { state.currentQuestion = action.payload })
);
