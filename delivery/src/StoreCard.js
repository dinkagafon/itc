import React from 'react';
import styled from 'styled-components';
import { Col } from 'react-flexbox-grid';

const Link = styled.a`
  display: block;
  margin-bottom: 48px;
  text-decoration: inherit;
  color: inherit;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
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

const Categories = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  text-align: left;
  color: #333333;
  margin: 0;
`;

const NameBlock = styled.div`
  height: 100px;
`;

const PriceBucket = styled.div`
  font-style: normal;
  font-weight: normal;
  line-height: 32px;
  font-size: 20px;
  text-align: center;
  width: 25%;
  height: 32px;
  background: #DBDBDB;
  border-radius: 16px;
  color: #333;
  margin-top: 15px;
`;

const TimeDel = styled.div`
  width: 55%;
  height: 32px;
  background: #DBDBDB;
  border-radius: 16px;
  font-style: normal;
  font-weight: normal;
  line-height: 32px;
  font-size: 18px;
  text-align: center;
  color: #333;
  margin-right: 170px;
  float: right;
  margin-right: 10px;
  margin-top: 15px;
`;

const SellsAlcohol = styled.div`
  width: 121px;
  height: 32px;
  background: #DBDBDB;
  border-radius: 16px;
  font-style: normal;
  font-weight: normal;
  line-height: 32px;
  font-size: 18px;
  text-align: center;
  color: #333;
  margin-top: 10px;
`;
const StoreCard = ({ name, img, lg, priceBucket, categories, etaRangeMin, etaRangeMax, sellsAlcohol/*, minPrice, deliveryPrice, deliveryTime*/ }) => (
  <Col lg={lg} md={6} sm={12}>
    <Link>
      <Image src={img} />
      <NameBlock>
        <Name>{name}</Name>
        <Categories>{categories.join(', ')}</Categories>
      </NameBlock>
      <TimeDel>
        {etaRangeMin + " - " + etaRangeMax + " минут"}
      </TimeDel>
      <PriceBucket>
        {priceBucket}
      </PriceBucket>
      {sellsAlcohol && <SellsAlcohol>Алкоголь</SellsAlcohol>}
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
