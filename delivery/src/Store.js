import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import StoreCard from './StoreCard';
import Header1 from './Header1';
import Button from './Button';



const Store = () => (
  <Grid>
    <Row>
      <Col sm={12}>
        <Header1>Рестораны</Header1>
      </Col>
    </Row>
    <Row around="xs">
      <StoreCard name="Il Patio" img="https://duyt4h9nfnj50.cloudfront.net/resized/64aefca79e5d3f19540955e43e91126f-w550-bf.jpg" minPrice="900" deliveryPrice="" deliveryTime="90"/>
      <StoreCard name="Il Patio" img="https://duyt4h9nfnj50.cloudfront.net/resized/64aefca79e5d3f19540955e43e91126f-w550-bf.jpg" minPrice="900" deliveryPrice="" deliveryTime="90"/>
      <StoreCard name="Il Patio" img="https://duyt4h9nfnj50.cloudfront.net/resized/64aefca79e5d3f19540955e43e91126f-w550-bf.jpg" minPrice="900" deliveryPrice="" deliveryTime="90"/>
      <StoreCard name="Il Patio" img="https://duyt4h9nfnj50.cloudfront.net/resized/64aefca79e5d3f19540955e43e91126f-w550-bf.jpg" minPrice="900" deliveryPrice="" deliveryTime="90"/>
      <StoreCard name="Il Patio" img="https://duyt4h9nfnj50.cloudfront.net/resized/64aefca79e5d3f19540955e43e91126f-w550-bf.jpg" minPrice="900" deliveryPrice="" deliveryTime="90"/>
      <StoreCard name="Il Patio" img="https://duyt4h9nfnj50.cloudfront.net/resized/64aefca79e5d3f19540955e43e91126f-w550-bf.jpg" minPrice="900" deliveryPrice="" deliveryTime="90"/>
      <StoreCard name="Il Patio" img="https://duyt4h9nfnj50.cloudfront.net/resized/64aefca79e5d3f19540955e43e91126f-w550-bf.jpg" minPrice="900" deliveryPrice="" deliveryTime="90"/>
      <StoreCard name="Il Patio" img="https://duyt4h9nfnj50.cloudfront.net/resized/64aefca79e5d3f19540955e43e91126f-w550-bf.jpg" minPrice="900" deliveryPrice="" deliveryTime="90"/>
    </Row>
    <Row center="xs">
      <Col lg={12} md={12} sm={12} xs={12}>
        <Button>Все рестораны</Button>
      </Col>
    </Row>
  </Grid>
)
export default Store
