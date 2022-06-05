import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';

export const setActions = <T extends {}>(actionCreators: T) => {
    const _useActions = () => {
        const dispatch = useDispatch();

        return useMemo(() => bindActionCreators(actionCreators, dispatch), [dispatch]);
    };

    return _useActions;
}
