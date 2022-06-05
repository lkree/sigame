import { createAction } from '@reduxjs/toolkit';

export const add = createAction('ADD');
export const reduce = createAction('REDUCE');
export const something = createAction('something');
export const matcher = createAction<string>('matcher');
export const sagaAction = createAction('sagaAction');
export const deferredAdd = createAction('deferredAdd');
export const deferredReduce = createAction<number>('deferredReduce');
