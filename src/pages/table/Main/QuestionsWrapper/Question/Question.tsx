import React, { CSSProperties } from 'react';
import { Question as QuestionType } from '../../../../../redux/app/table';

import './Question.sass';

interface Props {
    questionData: QuestionType;
    style?: CSSProperties;
    onClick?: (question: QuestionType) => any;
}

export const Question = ({ questionData, onClick, style = {} }: Props) => (
    <p className="Question" style={ style } onClick={() => onClick?.(questionData)}>{ questionData.payment }</p>
);
