import React from 'react';
import { Badge, Image, Container, Row, Col} from 'react-bootstrap'
import icon from '../img/mainIcon.png';

const Introduction = () => {
    return (
        <>
            <Image src={icon} className="ac mgt-02"  />
            <h2 className="tac">
                Matching에 오신 것을 환영합니다.
            </h2>
            <Container className="mgt-08">
                <Row>
                    <Col>간편하게 상대방 구하기!ㄴㅇㄹㅇㄴㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹ</Col>
                    <Col>간편하게 상대방 구하기!</Col>
                    <Col>간편하게 상대방 구하기!</Col>
                </Row>
            </Container>
        </>        
    );
}

export default Introduction;