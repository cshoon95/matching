import React, { useState } from 'react';
import { Tabs, Tab, } from 'react-bootstrap';
import SocialMatch from './SocialMatch';
import StadiumReserve from './StadiumReserve';

const MainTab = () => {
    const [key, setKey] = useState('socialMacth');
    const onClick = (e: any) => {
        debugger
    }
    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(selectedKey: string | null) => { if (selectedKey) setKey(selectedKey); }}
            className="mb-3"
        >
            <Tab eventKey="socialMacth" title="소셜 매치">
                <SocialMatch />
            </Tab>
            <Tab eventKey="stadiumReserve" title="구장 예약">
                <StadiumReserve />
            </Tab>
            <Tab eventKey="???" title="미정">
                
            </Tab>
        </Tabs>
    )
}

export default MainTab;