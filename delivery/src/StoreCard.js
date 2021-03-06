import React from 'react';
import styled from 'styled-components';
import { Col } from 'react-flexbox-grid';

const Link = styled.a`
  display: block;
  margin-bottom: 48px;
  text-decoration: inherit;
  color: inherit;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 16px;
`;

const Name = styled.h2`
  margin: 6px 0;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  text-align: left;
  color: #333333;
`;

const OrderInfo = styled.p`
  margin: 6px 0;
  font-size: 16px;
  line-height: 22px;
`;

const MinPrice = styled.span`
  font-weight: bold;
`;

const Text = styled.p`
  margin: 6px 0 0 0;
`;

const DeliveryInfo = styled.p`
  margin: 0 0 6px 0;
  font-weight: bold;
`;

const StoreCard = ({ name, img, lg/*, minPrice, deliveryPrice, deliveryTime*/ }) => (
  <Col lg={lg} md={6} sm={12}>
    <Link>
      <Image src={img} />
      <Name>{name}</Name>
    </Link>
  </Col>
);

export default StoreCard;
//
/*<OrderInfo>
  Заказ от
  <MinPrice> {minPrice}р.</MinPrice>
</OrderInfo>
<Text>Доставка</Text>
<DeliveryInfo>
  {deliveryPrice ? `${deliveryPrice}р.` : 'бесплатно'}, {deliveryTime} минут
</DeliveryInfo>*/
