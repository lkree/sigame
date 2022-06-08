import { useSelector } from 'react-redux';
import { memo } from 'react';

import { selectLeadTeam, useSettingsActions } from '../../../redux/app/settings';
import { FormField } from '../../../components/FormField';

interface Props {
    className?: string;
}

export const TeamLeadEditor = memo((props: Props = {}) => {
    const { setLeadTeam } = useSettingsActions();

    return (
        <FormField { ...props }
                   label="Команда которая начнёт ходить"
                   type="number"
                   placeholder="введите номер команды"
                   value={useSelector(selectLeadTeam)}
                   htmlFor="teamsCountEditor"
                   onChange={(e) => setLeadTeam(+e.target.value)} />
    )
});
