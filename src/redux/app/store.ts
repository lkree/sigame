import createSageMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import { createRootReducer } from './reducer';
import { rootSaga } from './rootSaga';

const sagaMiddleware = createSageMiddleware();

export const createStore = () => {
    const store = configureStore({
        reducer: createRootReducer(),
        middleware: getDefaultMiddleware => [
            ...getDefaultMiddleware({}),
            sagaMiddleware
        ]
    });

    sagaMiddleware.run(rootSaga);

    return store;
};

export type CreateStoreReturnType = ReturnType<typeof createStore>;
export type StoreState = ReturnType<CreateStoreReturnType['getState']>;
export type GetState = CreateStoreReturnType['getState'];
