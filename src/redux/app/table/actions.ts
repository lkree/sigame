import { createAction } from '@reduxjs/toolkit';

import { setActions } from '../../../misc/hooks';
import { Questions, Question } from './types';

export const downloadQuestions = createAction('DOWNLOAD_QUESTIONS');
export const setQuestions = createAction<Questions>('SET_QUESTIONS');
export const removeQuestion = createAction('REMOVE_QUESTION');
export const setCurrentQuestion = createAction<Question | null>('SET_CURRENT_QUESTION');

export const useTableActions = setActions({ downloadQuestions, setQuestions, setCurrentQuestion, removeQuestion });
