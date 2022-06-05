import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export const Main = () => {
    const navigate = useNavigate();

    return (
        <div className="d-flex flex-column position-absolute" style={{ top: '35%', left: '50%', transform: 'translate(-50%)' }}>
            <Button className="mb-1"
                    variant="success"
                    onClick={ () => navigate('/table/') }>Start game</Button>
            <Button variant="success" onClick={ () => navigate('/settings/') }>Settings</Button>
        </div>
    );
};
