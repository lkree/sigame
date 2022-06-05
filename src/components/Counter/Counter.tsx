import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, matcher, reduce, something, sagaAction, deferredAdd, deferredReduce, selectValue } from '../../redux/app/computations';

export default () => {
    const value = useSelector(selectValue);
    const dispatch = useDispatch();

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div>
                <div>{ value }</div>
            </div>
            <div>
                <button onClick={() => dispatch(add())}>add</button>
                <button onClick={() => dispatch(reduce())}>reduce</button>
                <button onClick={() => dispatch(something())}>something</button>
                <button onClick={() => dispatch(matcher('asd'))}>matcher</button>
                <button onClick={() => dispatch(matcher('first'))}>first</button>
                <button onClick={() => dispatch(matcher('second'))}>second</button>
                <button onClick={() => dispatch(sagaAction())}>saga action</button>
                <button onClick={() => dispatch(deferredAdd())}>deferred add</button>
                <button onClick={() => dispatch(deferredReduce(55))}>deferred reduce</button>
            </div>
        </div>
    );
}
