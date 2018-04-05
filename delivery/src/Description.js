import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import descriptionImg from './img/picpizzaaa.jpg'
import Header1 from './Header1';

const DescriptionText = styled.div`
  font-family: "Open Sans", Regular;
  font-size: 18px;
`;

const DescriptionImg = styled.img`
  width: 100%;
`;


const Description = () => (
  <Grid>
    <Row>
      <Col lg={6} md={12}>
        <Header1>Что мы делаем?</Header1>
        <DescriptionText>
          <p>
            Delivery Club - это независимый клубный проект, объединивший сотни служб доставки еды и продуктов в Единую Систему Заказов.
          </p>
          <p>
            Цель проекта - обеспечить своим пользователям наилучшие условия для быстрого, удобного и выгодного осуществления заказов.
            Услуги сайта абсолютно бесплатны, а условия доставки очень простые
          </p>
        </ DescriptionText>
      </Col>
      <Col lg={6} md={0}>
        <DescriptionImg src={descriptionImg} aria-hidden />
      </Col>
    </Row>
  </Grid>
)
export default Description
