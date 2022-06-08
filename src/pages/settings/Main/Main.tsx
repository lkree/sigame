import { Form } from 'react-bootstrap';

import { BackButton } from '../../../components/BackButton';
import { TeamsCountEditor } from '../TeamsCountEditor';
import { TeamLeadEditor } from '../TeamLeadEditor';
import { TeamsEditor } from '../TeamsEditor';

export const Main = () => (
    <>
        <BackButton/>
        <Form>
            <TeamsCountEditor className="mb-3 mt-3" />
            <TeamLeadEditor className="mb-3" />
            <TeamsEditor />
        </Form>
    </>
);
