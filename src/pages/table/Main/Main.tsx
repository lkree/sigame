import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { isEmpty } from 'lodash';

import { selectCurrentQuestion, selectQuestions, useTableActions } from '../../../redux/app/table';
import { selectTeamsCount, useSettingsActions } from '../../../redux/app/settings';
import { QuestionsWrapper } from '../QuestionsWrapper';
import { Question } from '../Question';
import { cn } from '../../../misc';
import { Teams } from '../Teams';

import css from './Main.module.sass';

export const Main = () => {
    const questions = useSelector(selectQuestions);
    const teamsCount = useSelector(selectTeamsCount);
    const currentQuestion = useSelector(selectCurrentQuestion);
    const { downloadQuestions } = useTableActions();
    const { resetTeamData } = useSettingsActions();

    useEffect(() => {
        downloadQuestions();
        resetTeamData();
    }, [downloadQuestions, resetTeamData]);

    if (isEmpty(questions)) return null;

    return (
        <>
            {currentQuestion ? <Question /> : <QuestionsWrapper questions={questions} /> }
            <Teams className={cn(css.Teams, 'position-absolute', teamsCount === 2 ? 'w-50' : 'w-75')} />
        </>
    );
};
