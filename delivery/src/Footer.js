import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import vk from './img/vk.png'
import ig from './img/ig.png'


const FooterMain = styled.footer`
  margin-top: 100px;
  padding-bottom: 64px;
  background-color: #333333;

  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

const FooterTitle = styled.h4`
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  color: #999999;
  margin-top: 40px;

  @media (min-width: 768px) {
    text-align: left;
  }
`;
const FooterLink = styled.a`
  display: block;
  font-family: "Open Sans", Regular;
  font-size: 18px;
  line-height: 32px;
  text-align: center;
  text-decoration: underline;
  color: #cccccc;
  cursor:pointer;

  &:hover{
    color: #a3d200;

  }

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const FooterSocial = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: right;
  }
`;

const FooterSocialIconImg = styled.img`
  margin-top: 40px;
  margin-left: 15px;
`;

const FooterCopyright = styled.p`
  font-size: 18px;
  line-height: 32px;
  text-align: left;
  color: #cccccc;
  text-align: center;
  line-height: 24px;
  margin-top: 40px;

  @media (min-width: 768px) {
    text-align: right;
  }
`;

const FooterSocialIcon = (props) =>(
  <a href={props.href}>
    <FooterSocialIconImg alt="" src={props.src}/>
  </a>
)

const Footer = () =>(
  <FooterMain>
    <Grid>
      <Row between="xs" center="xs" start="md">
        <Col md={6} xs={12} start="md">
          <FooterTitle>Компания</FooterTitle>
          <FooterLink>Для курьеров</FooterLink>
          <FooterLink>Партнерство для ресторанов</FooterLink>
          <FooterLink>Условия проведения акций</FooterLink>
          <FooterLink>Контакты</FooterLink>
        </Col>
        <Col md={6} xs={12}>
          <FooterSocial>
            <FooterSocialIcon href="" src={vk}/>
            <FooterSocialIcon href="" src={ig}/>
          </FooterSocial>
          <FooterCopyright>&copy; 2009-2018 Delivery Club&trade;
                            <br />Все права защищены</FooterCopyright>
        </Col>
      </Row>
    </Grid>
  </FooterMain>
)

export default Footer
