import React, { useState } from 'react';
import { Tabs, Tab, } from 'react-bootstrap';
import Carousel from '../module/Carousel';
import Calendar from '../module/Calendar';
import MatchList from '../module/MatchList';
import Progress from '../module/Progress';
import FilterButtonGroup from '../module/FilterButtonGroup';
import mc from '../core/Mc';

const MainTab = () => {
    const [key, setKey] = useState('socialMatch');

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(selectedKey: string | null) => { 
                if (selectedKey) {
                    //! 이부분 추후 수정하자
                    setKey(selectedKey);
                    mc.setValue('currTab', selectedKey); 
                }
            }}
            className="mgl-01 mgr-01 mb-3"
        >   
            <Progress/>
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