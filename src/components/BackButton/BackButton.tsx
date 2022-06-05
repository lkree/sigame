import { Button } from 'react-bootstrap';
import { HiArrowLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { memo } from 'react';

export const BackButton = memo(() => {
    const navigate = useNavigate();
    const onClick = () => navigate(-1);

    return (
        <Button variant="success" style={{ width: '100px' }} onClick={onClick}>
            <HiArrowLeft />
        </Button>
    );
});
