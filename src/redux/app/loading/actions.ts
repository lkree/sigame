import { createAction } from '@reduxjs/toolkit';

export const setIsLoading = createAction<boolean>('setIsLoading');
export const loadingCompleted = createAction<boolean>('loadingCompleted');
