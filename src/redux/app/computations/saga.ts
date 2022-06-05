import { all, takeLatest, select, call, put, takeLeading, takeEvery, take, race } from 'typed-redux-saga';
import { deferredAdd, deferredReduce, add, reduce, sagaAction } from './actions';
import { getState } from './selectors';
import { sleep } from '../../../misc';

function* getData() {
  yield sleep(1000);

  yield [];

  return 6;
}

function* testSaga() {
    const value = select(getState);

    yield put(add());

    console.log(10);

    yield 123;

    console.log(234);

    yield 5;

    const a = yield* getData();

    yield put(reduce());

    const b = yield* race({
        reduce: take(deferredReduce.type),
        add: take(deferredAdd.type)
    });

    debugger;

    yield 5;
}

function* deferredAddSaga() {
    yield sleep(1000);
    yield put(add());
}

function* deferredReduceSaga() {
    yield sleep(1000);
    yield put(reduce());
}

export function* saga() {
    yield* all([
        takeLatest(sagaAction.type, testSaga),
        takeEvery(deferredAdd.type, deferredAddSaga),
        takeLeading(deferredReduce.type, deferredReduceSaga)
    ]);
}
