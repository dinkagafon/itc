import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Route, Link } from "react-router-dom";
import StoreCard from './StoreCard';
import Header1 from './Header1';
import ButtonAdd from './ButtonAdd';
import ScrollToTopOnMount from './ScrollToTopOnMount';



class Store extends Component {
  state = {
    stores: {},
    loader: 1,
    hasMore: true
  }
  componentDidMount() {
    fetch("https://itc-web1-server-iwcqwjrbcr.now.sh/stores?limit=" + this.props.elem)
      .then(res => res.json())
      .then(json => {
        this.setState( {stores: json.payload.stores})
        this.setState( {loader: 0})
      })
  }
  render() {
    return (
      <Grid>
        <ScrollToTopOnMount/>
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
                    {...this.props}
                  />
                )
          }
        </Row>
        {this.state.loader ? <div className="loader">Loading...</div> : ""}
        <Row center="xs">
          <Col lg={12} md={12} sm={12} xs={12}>
            { this.state.hasMore && <ButtonAdd addStores={this.addStores}/>}
          </Col>
        </Row>
      </Grid>
    );
  }

  addStores = () => {
    this.setState( {loader: 1})
    fetch("https://itc-web1-server.now.sh/stores?limit=" + this.props.elem + "&offset=" + this.state.stores.length)
      .then(res => res.json())
      .then(json => {
        this.setState( {stores: this.state.stores.concat(json.payload.stores) })
        this.setState( {hasMore: json.payload.hasMore })
        this.setState( {loader: 0})
      })
  }
}

export default Store
