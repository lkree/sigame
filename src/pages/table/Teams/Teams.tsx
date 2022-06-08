import { Col, Row, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { memo } from 'react';

import { selectTeamsCount, selectTeamsSettings, TeamSettings, useSettingsActions } from '../../../redux/app/settings';
import { selectCurrentQuestion, useTableActions } from '../../../redux/app/table';

interface Props {
    className?: string;
}

export const Teams = memo(({ className }: Props) => {
    const teams = useSelector(selectTeamsSettings);
    const teamsCount = useSelector(selectTeamsCount);
    const currentQuestion = useSelector(selectCurrentQuestion);
    const { editTeams } = useSettingsActions();
    const { setCurrentQuestion, removeQuestion } = useTableActions();

    const onTeamClick = (currentValue: number, id: number) => {
        if (!currentQuestion) return;

        editTeams({ value: currentValue + currentQuestion.payment, id });
        removeQuestion();
        setCurrentQuestion(null);
    };

    const getTeam = (team: TeamSettings, id: number) => {
        const classNames = 'bg-gradient p-3 m-2 justify-content-center';

        return (
            <Col sm={12 / teamsCount} key={team.name} className="flex-column d-flex" onClick={() => onTeamClick(team.points, id)}>
                <Row className={classNames}>
                    <img src={ team.img }
                         alt=""/>
                </Row>
                <Row className={classNames}>{ team.name }</Row>
                <Row className={classNames}>{ team.points }</Row>
            </Col>
        );
    }

    return (
        <Container className={className}>
            <Row>{ teams.map(getTeam) }</Row>
        </Container>
    )
});
