import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import StoreCard from './StoreCard';
import Header1 from './Header1';
import Button from './Button';

class Store extends Component {
  state = {
    stores: {}
  }
  componentDidMount() {
    fetch("https://itc-web1-server-iwcqwjrbcr.now.sh/stores?limit=8")
      .then(res => res.json())
      .then(json => {
        this.setState( {stores: json.payload.stores})
        console.log(json)
      })

  }
  render() {
    return (
      <Grid>
        <Row>
          <Col sm={12}>
            <Header1>Рестораны</Header1>
          </Col>
        </Row>
        <Row around="xs">
          {
              Object.keys(this.state.stores)
                .map(store => <StoreCard
                    name={this.state.stores[store]['title']}
                    key={this.state.stores[store]['uuid']}
                    img={this.state.stores[store]['heroImageUrl']}
                  />
                )
          }
        </Row>
        <Row center="xs">
          <Col lg={12} md={12} sm={12} xs={12}>
            <Button>Все рестораны</Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Store
