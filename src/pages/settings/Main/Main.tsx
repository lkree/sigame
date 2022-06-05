import { Form } from 'react-bootstrap';
import { TeamsCountEditor } from '../TeamsCountEditor';
import { BackButton } from '../../../components/BackButton';
import { TeamsEditor } from '../TeamsEditor';

export const Main = () => (
    <>
        <BackButton/>
        <Form>
            <TeamsCountEditor />
            <TeamsEditor />
        </Form>
    </>
);
