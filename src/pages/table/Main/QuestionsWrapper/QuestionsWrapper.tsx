import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Question as QuestionType, Questions, setCurrentQuestion } from '../../../../redux/app/table';
import { Question } from './Question';

import './QuestionsWrapper.sass';

interface Props {
    questions: Questions;
}

const TEXT_COLOR = 'white';

export const QuestionsWrapper = memo(({ questions }: Props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onQuestionClick = useCallback((d: QuestionType) => {
        dispatch(setCurrentQuestion(d));
        navigate('/question/');
    }, [navigate, dispatch]);

    return (
        <div className="QuestionsWrapper">
            {
                questions.data.level0.map(({ themeName, questions }) => (
                    <div className="QuestionsWrapper__row"
                         key={ themeName }>
                        <div className="QuestionsWrapper__themeName">{ themeName }</div>
                        {
                            questions.map(q => (
                                <Question questionData={ q }
                                          onClick={ onQuestionClick }
                                          style={ { color: TEXT_COLOR, background: 'dimgray', display: 'table-cell' } }
                                          key={ q.payment }/>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
});
