import React, { useState } from 'react';
import { Form, Row, Col, InputGroup, Button} from 'react-bootstrap';
import mc from '../core/Mc';
import Image from 'react-bootstrap/Image'
import icon from '../style/img/mainIcon.png';

const Register = () => {
    const labelStyle = {
        marginTop: "1rem"
    }
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event: any) => {
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
    
        setValidated(true);
    };

    return (
        <>
        <Image src={icon} rounded style={{ display : 'block', margin : 'auto', marginTop: '2rem'}}/>
        <Form noValidate validated={validated} onSubmit={handleSubmit} style={{marginTop: '2rem'}}>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="registerID">
                    <Form.Label style={labelStyle}>아이디</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="아이디를 입력해주세요."
                    />
                    <Form.Control.Feedback type="invalid">
                        아이디를 정확히 입력해주세요.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="registerPass1">
                    <Form.Label style={labelStyle}>비밀번호</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder="비밀번호를 입력해주세요."
                    />
                    <Form.Control.Feedback type="invalid">
                        비밀번호를 정확히 입력해주세요.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="registerPass2">
                    <Form.Label style={labelStyle}>비밀번호 재확인</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder="비밀번호를 입력해주세요."
                    />
                    <Form.Control.Feedback type="invalid">
                        비밀번호 확인을 정확히 입력해주세요.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="registerName">
                    <Form.Label style={labelStyle}>이름</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="Username"
                    required
                    />
                    <Form.Control.Feedback type="invalid">
                        이름을 정확히 입력해주세요.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Button type="submit">Submit form</Button>
        </Form>
        </>
    );
};

export default Register;