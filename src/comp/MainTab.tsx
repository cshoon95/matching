import React, { useState } from 'react';
import { Tabs, Tab, } from 'react-bootstrap';
import Carousel from '../module/Carousel';
import Calendar from '../module/Calendar';
import MatchList from '../module/MatchList';
import FilterButtonGroup from '../module/FilterButtonGroup';

const MainTab = () => {
    const [key, setKey] = useState('socialMatch');

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(selectedKey: string | null) => { if (selectedKey) setKey(selectedKey); }}
            className="mgl-01 mgr-01 mb-3"
        >
            <Tab eventKey="socialMatch" title="소셜 매치">
                <Carousel/>
                <Calendar />
                <FilterButtonGroup />
                <MatchList />
            </Tab>
            <Tab eventKey="stadiumReserve" title="구장 예약">
                <Calendar />
                <FilterButtonGroup />
            </Tab>
            <Tab eventKey="???" title="미정">
                
            </Tab>
        </Tabs>
    )
}

export default MainTab;