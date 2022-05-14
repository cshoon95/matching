import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import mc from '../core/Mc';
import Utils from '../core/Utils';

const Calendar = () => {
    const [key, setKey] = useState('socialMatch');
    const dayArr = Utils.getDayArr(6);

    return (
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
    )
}

export default Calendar;