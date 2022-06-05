import { useSelector } from 'react-redux';
import { selectCurrentQuestion } from '../../../redux/app/table';

export const Main = () => (
    <p>{ useSelector(selectCurrentQuestion)?.text }</p>
);
