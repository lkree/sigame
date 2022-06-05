import { Button, Collapse } from 'react-bootstrap';
import { useCallback, useState } from 'react';

import { Teams } from './Teams';

export const TeamsEditor = () => {
    const [open, setOpen] = useState(false);
    const onClick = useCallback(() => setOpen(state => !state), []);

    return (
        <>
            <Button onClick={onClick}>Настройка команд</Button>
            <Collapse in={ open }>
                <div><Teams /></div>
            </Collapse>
        </>
    )
};
