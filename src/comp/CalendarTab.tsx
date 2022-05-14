import React, { useState, useEffect } from 'react';
import { Tabs, Tab, ListGroup, Badge, Button } from 'react-bootstrap';
import SocialMatch from './SocialMatch';
import mc from '../core/Mc';
import Utils from '../core/Utils';

const CalendarTab = () => {
    const [key, setKey] = useState('socialMacth');
    const dayArr = Utils.getDayArr(6);

    return (
        <>
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(key)}
            className="mgb-01 mgt-01 mgl-01 mgr-01"
        >
            {dayArr.map((date: Date) => {
                return (  
                    <Tab key={date.getDate()} eventKey={date.getDate()} title={String(date.getDate())} />
                )
            })}
        </Tabs>

        <ListGroup as="ol" className="mgl-01 mgr-01">
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <Badge className="mgt-01 mr-2" bg="primary">
                    18:00
                </Badge>
                <div className="ms-2 me-auto">
                    <div className="fw-bold">경기도 고양시 충장근린공원</div>
                    남자 11vs11 모든 레벨
                </div>
                <Button className="mt-2" variant="primary" size="sm">
                    마감임박!
                </Button>
            </ListGroup.Item>
        </ListGroup>
        </>
    )
}

export default CalendarTab;