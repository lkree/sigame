import { createAction } from '@reduxjs/toolkit';
import { Questions, Question } from './types';

export const downloadQuestions = createAction('DOWNLOAD_QUESTIONS');
export const setQuestions = createAction<Questions>('SET_QUESTIONS');
export const setCurrentQuestion = createAction<Question>('SET_CURRENT_QUESTION');
