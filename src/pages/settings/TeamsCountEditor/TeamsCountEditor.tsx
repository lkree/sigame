import { useSelector } from 'react-redux';
import { memo } from 'react';

import { selectTeamsCount, useSettingsActions } from '../../../redux/app/settings';
import { FormField } from '../../../components/FormField';

interface Props {
    className?: string;
}

export const TeamsCountEditor = memo((props: Props = {}) => {
    const { setTeamsCount } = useSettingsActions();

    return (
        <FormField {...props}
                   label="Количество команд"
                   type="number"
                   placeholder="введите количество команд"
                   value={useSelector(selectTeamsCount)}
                   htmlFor="teamsCountEditor"
                   onChange={(e) => setTeamsCount(+e.target.value)} />
    )
});
