import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Link } from "react-router-dom";
import whiteLogo from './img/logowhite.png'
import blackLogo from './img/logoblack.png'
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
  <Row center="xs" between="lg">
    <Col lg={1}>
      <Link to="/">
        {props.logo ? <Logo src={whiteLogo} /> : <Logo src={blackLogo} />}
      </Link>
    </Col>
    <Col lgOffset={6} />
    <Col lg={3}>
      <ButtonHeader>{props.button_text}</ButtonHeader>
    </Col>
  </Row>
)

export default AllHeader
