import React, { memo, useCallback } from 'react';

import { Question as QuestionType, Questions, useTableActions } from '../../../redux/app/table';
import { BackButton } from '../../../components/BackButton';
import { Question } from './Question';

import './QuestionsWrapper.sass';

interface Props {
    questions: Questions;
}

export const QuestionsWrapper = memo(({ questions }: Props) => {
    const { setCurrentQuestion } = useTableActions();

    const onQuestionClick = useCallback((d: QuestionType) => {
        setCurrentQuestion(d);
    }, [setCurrentQuestion]);

    return (
        <div className="QuestionsWrapper">
            <BackButton />
            {
                questions.data.level0.map(({ themeName, questions }) => (
                    <div className="QuestionsWrapper__row"
                         key={ themeName }>
                        <div className="QuestionsWrapper__themeName">{ themeName }</div>
                        {
                            questions.map(q => (
                                <Question questionData={ q }
                                          onClick={ onQuestionClick }
                                          style={ { background: 'dimgray', display: 'table-cell' } }
                                          key={ q.payment }/>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
});
