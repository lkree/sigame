import { useSelector } from 'react-redux';
import React from 'react';

import { selectCurrentQuestion } from '../../../redux/app/table';

export const Question = () => (
    <>
        <p>{ useSelector(selectCurrentQuestion)?.text }</p>
    </>
);
