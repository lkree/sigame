import { Form, FormControlProps, Col, Row } from 'react-bootstrap';
import { memo } from 'react';

interface Props {
    label: string;
    type: FormControlProps['type'];
    value: string | number;
    onChange: FormControlProps['onChange'];
    placeholder?: string;
    htmlFor?: string;
    className?: string;
}

export const FormField = memo(({ label, htmlFor, className, ...rest }: Props) => {
    return (
        <Form.Group as={Row} className={className}>
            <Form.Label htmlFor={ htmlFor } column sm="3">{ label }</Form.Label>
            <Col sm="6">
                <Form.Control className="bg-dark text-info" id={ htmlFor } { ...rest } />
            </Col>
        </Form.Group>
    )
});
