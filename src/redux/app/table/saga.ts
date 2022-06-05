import { all, takeLatest, select, call, put, takeLeading, takeEvery, take, race } from 'typed-redux-saga';
import { downloadQuestions, setQuestions } from './actions';
import { Questions } from './types';

const getQuestions = () => import('../../../assets/data/questions.json').then(({ data }) => ({ data } as unknown as Questions));

function* downloadQuestionsSaga() {
    yield put(setQuestions(yield* call(getQuestions)));
}

export function* saga() {
    yield* all([
        takeLatest(downloadQuestions.type, downloadQuestionsSaga)
    ]);
}
