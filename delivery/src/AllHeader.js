import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import logo from './img/logowhite.png'
import styled from 'styled-components';
import Button from './Button';


const Logo = styled.img`
  max-width: 208px;
  max-height: 64px;
  margin-top: 50px;
  color: #fff;
`;

const ButtonHeader = Button.extend`
  margin-top: 63px;
`;

const AllHeader = (props) =>(
  <Row center="xs">
    <Col lg={3} center="md">
      <Logo src={logo} />
    </Col>
    <Col lgOffset={5} />
    <Col lg={3}>
      <ButtonHeader>{props.button_text}</ButtonHeader>
    </Col>
  </Row>
)

export default AllHeader
