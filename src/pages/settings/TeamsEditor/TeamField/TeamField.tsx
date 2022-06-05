import { FormControlProps } from 'react-bootstrap';
import { memo } from 'react';

import { useTeamsActions } from '../../../../redux/app/settings';
import { FormField } from '../../../../components/FormField';

interface Props {
    value: string | number;
    type: FormControlProps['type'];
    label: string;
    id: number;
}

export const TeamField = memo(({ id, type, ...props }: Props) => {
    const { editTeams } = useTeamsActions();

    return (
        <FormField { ...props }
                   type={type}
                   htmlFor={id + type!}
                   onChange={({ target: { value: payload } }) => editTeams({ value: type === 'number' ? +payload : payload, id }) } />
    )
});
