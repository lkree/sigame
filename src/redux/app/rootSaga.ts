import { all } from 'typed-redux-saga';
import { saga as computationsSaga } from './computations/saga';
import { saga as loadingSaga } from './loading/saga';
import { saga as tableSaga } from './table/saga';

export function* rootSaga() {
    yield all([computationsSaga(), loadingSaga(), tableSaga()]);
}
