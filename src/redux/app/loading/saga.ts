import { all, fork, put, race, select, spawn, take, takeLatest } from 'typed-redux-saga';
import { loadingCompleted, setIsLoading } from './actions';
import { sleep } from '../../../misc';
import { selectIsLoading } from './selectors';
import { selectValue } from '../computations';

function* loadingCompletedSaga({ payload }: ReturnType<typeof loadingCompleted>) {
    yield sleep(1500);

    const currentLoadingStatus = yield* select(selectIsLoading);
    const currentValue = yield* select(selectValue);

    const isLoading = yield* race({
        loaded: sleep(500),
        failed: sleep(650)
    });

    yield* race([sleep(500), sleep(1000), sleep(5200)]);

    console.log(5);

    yield put(setIsLoading(!('loaded' in isLoading)));

    // try {
    //     const a = yield* spawn(() => { throw new Error('asd') });
    //
    //     console.log(a);
    // } catch ({ e }) { console.log(e) }
}

export function* saga() {
    yield* all([
        takeLatest(loadingCompleted.type, loadingCompletedSaga)
    ]);
}
