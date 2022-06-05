import { useSelector } from 'react-redux';
import { Fragment, memo } from 'react';

import { selectTeamsSettings } from '../../../../redux/app/settings';
import { TeamField } from '../TeamField';

const TEAM_MAP = {
    text: {
        label: 'Имя',
        type: 'text'
    },
    number: {
        label: 'Очки',
        type: 'number'
    }
}

export const Teams = memo(() => (
        <>
            {
                useSelector(selectTeamsSettings).map(({ name, startPoints }, i) => (
                    <Fragment key={ i }>
                        <TeamField { ...TEAM_MAP.text } id={ i } value={ name } />
                        <TeamField { ...TEAM_MAP.number } id={ i } value={ startPoints } />
                    </Fragment>
                ))
            }
        </>
    )
);
