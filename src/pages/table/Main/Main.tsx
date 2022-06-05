import React, { useEffect } from 'react';
import { downloadQuestions, selectQuestions } from '../../../redux/app/table';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import { QuestionsWrapper } from './QuestionsWrapper';

export const Main = () => {
    const questions = useSelector(selectQuestions);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isEmpty(questions)) dispatch(downloadQuestions());
    }, [questions, dispatch]);

    if (isEmpty(questions)) return null;

    return <QuestionsWrapper questions={questions} />;
};
