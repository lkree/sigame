import { useCallback, useRef, useState } from 'react';
import { Transition } from 'react-transition-group';
import { Button, Collapse } from 'react-bootstrap';

import { Teams } from './Teams';

const defaultStyle = {
    transition: `height ${ 200 }ms ease-in-out`
}

export const TeamsEditor = () => {
    const [isOpen, setIsOpen] = useState(false);
    const onClick = useCallback(() => setIsOpen(state => !state), []);
    const ref = useRef(null);

    return (
        <>
            <Button onClick={ onClick }>Настройка команд</Button>
            <Transition in={ isOpen } timeout={ 200 } nodeRef={ ref }>
                <Collapse in={ isOpen }>
                    <div ref={ ref } style={ defaultStyle }>
                        <Teams />
                    </div>
                </Collapse>
            </Transition>
        </>
    )
};
