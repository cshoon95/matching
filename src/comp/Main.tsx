import React from 'react';
import { Badge, Image, Container, Row, Col } from 'react-bootstrap'
import icon from '../img/mainIcon.png';
import mc from '../core/Mc';
import MainTab from './MainTab';
import Introduction from './Introduction';

const Main = () => {
  const isMobile: boolean = mc.getValue('isMobile');
  
  return (
    <>
      {isMobile ? <MainTab/> : <Introduction/>}
    </>
  );
}

export default Main;
