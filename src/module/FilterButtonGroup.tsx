import React from 'react';
import { ButtonGroup, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import List from '../core/List';
import mc from '../core/Mc';

const FilterButtonGroup = () => {
    return (
        <ButtonGroup className="mgl-01">
            <DropdownButton as={ButtonGroup} title="지역" id="bg-nested-dropdown" className="mb-3 mgr-01">
                {List.area().map((item: {code: string, label: string}, index: number) => {
                    return <Dropdown.Item eventKey={index} key={index}>{item.label}</Dropdown.Item>
                })}
            </DropdownButton>
            <DropdownButton as={ButtonGroup} title="성별" id="bg-nested-dropdown" className="mb-3 mgr-01">
                {List.gender().map((item: {code: string, label: string}, index: number) => {
                    return <Dropdown.Item eventKey={index} key={index}>{item.label}</Dropdown.Item>
                })}
            </DropdownButton>
            <DropdownButton as={ButtonGroup} title="레벨" id="bg-nested-dropdown" className="mb-3 mgr-01">
                {List.level().map((item: {code: string, label: string}, index: number) => {
                    return <Dropdown.Item eventKey={index} key={index}>{item.label}</Dropdown.Item>
                })}
            </DropdownButton>
            <Button className="mb-3">{mc.getValue('currTab') === 'socialMatch' ? '마감 가리기' : '예약 가능'}</Button>
        </ButtonGroup>
    )
};

export default FilterButtonGroup;