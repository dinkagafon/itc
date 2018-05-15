import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import Button from './Button';
import AllHeader from './AllHeader';

const HeaderMain = styled.div`
  background-image: url(./img/bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 75px;
`;
const HeaderStandart = styled.div`
  padding-bottom: 45px;
  border-bottom: 1px solid #ccc
`;

const LeadHeader1 = styled.span`
  font-family: "Pacifico", cursive;
  font-size: 77.32px;
  text-align: left;
  letter-spacing: 2.97px;
  color: #fff;
  margin-top: 96px;
  margin-left: 200px;

  @media (max-width: 1200px) {
    display: block;
    width: 100%;
    margin-left: 0;
    text-align: center;
    line-height: 84px;
    font-size: 60px;
  }
`;

const LeadHeader2 = styled.span`
  font-family: "Pacifico", cursive;
  font-size: 182.75px;
  text-align: left;
  line-height: 37px;
  letter-spacing: 6.49px;
  color: #b7e611;
  margin-left: 260px;

  @media (max-width: 1200px) {
    display: block;
    width: 100%;
    margin-left: 0;
    text-align: center;
    line-height: 84px;
    font-size: 100px;
  }
`;

const ButtonAbout = Button.extend`
  margin-top: 128px;
`;

const StatndartHeader = () => (
  <HeaderStandart>
    <Grid>
      <AllHeader
        button_text="Вход / Регистрация"
        clr={0}
      />
    </Grid>
  </HeaderStandart>
)

const MainHeader = () => (
  <HeaderMain>
    <Grid>
      <AllHeader
          button_text="Вход / Регистрация"
          logo={1}
      />
      <Row>
        <Col xs={12}>
          <LeadHeader1>Меняйте баллы</LeadHeader1>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <LeadHeader2>на призы</LeadHeader2>
        </Col>
      </Row>
      <Row top="xs" center="xs">
        <Col xs={12}>
          <ButtonAbout>Подробнее  </ButtonAbout>
        </Col>
      </Row>
    </Grid>
  </HeaderMain>
)

const Header = () => (
  <div>
    <Switch>
      <Route exact path="/" component={MainHeader} />
      <Route path="/stores" component={StatndartHeader} />
    </Switch>
  </div>
)


export default Header
