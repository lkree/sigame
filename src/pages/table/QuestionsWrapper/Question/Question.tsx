import React, { CSSProperties } from 'react';
import { noop } from 'lodash';

import { Question as QuestionType } from '../../../../redux/app/table';

import './Question.sass';

interface Props {
    questionData: QuestionType;
    style?: CSSProperties;
    onClick?: (question: QuestionType) => any;
}

export const Question = ({ questionData, onClick, style = {} }: Props) => (
    <p className="Question"
       style={ style }
       onClick={questionData.enabled ? () => onClick?.(questionData) : noop}>
        { questionData.enabled ? questionData.payment : '' }
    </p>
);
