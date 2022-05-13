import React, { useState } from 'react';
import { Tabs, Tab, } from 'react-bootstrap';
import SocialMatch from './SocialMatch';

const MainTab = () => {
    const [key, setKey] = useState('socialMacth');

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(key)}
            className="mb-3"
        >
            <Tab eventKey="socialMacth" title="소셜 매치">
                <SocialMatch />
            </Tab>
            <Tab eventKey="???" title="미정">
                
            </Tab>
            <Tab eventKey="???" title="미정">
                
            </Tab>
        </Tabs>
    )
}

export default MainTab;