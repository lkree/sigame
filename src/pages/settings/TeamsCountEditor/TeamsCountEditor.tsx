import { useSelector } from 'react-redux';
import { memo } from 'react';

import { selectTeamsCount, useTeamsActions } from '../../../redux/app/settings';
import { FormField } from '../../../components/FormField';

export const TeamsCountEditor = memo(() => {
    const teamsCount = useSelector(selectTeamsCount);
    const { setTeamsCount } = useTeamsActions();

    return (
        <FormField label="Количество команд"
                   type="number"
                   placeholder="введите количество команд"
                   value={teamsCount}
                   htmlFor="teamsCountEditor"
                   onChange={(e) => setTeamsCount(+e.target.value)} />
    )
});
