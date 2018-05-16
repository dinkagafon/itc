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
    fetch("https://itc-web1-server.now.sh/stores?limit=" + this.props.elem)
      .then(res => res.json())
      .then(json => {
        this.setState( {stores: json.payload.stores})
        this.setState( {hasMore: json.payload.hasMore})
        this.setState( {loader: false})
      }).then(() => {
        fetch("https://itc-web1-server.now.sh/stores?limit=" + this.props.elem + "&offset=" + this.props.elem)
          .then(res => res.json())
          .then(json => {
            this.setState( {next_stores: json.payload.stores})
            this.setState( {next_hasMore: json.payload.hasMore})
          })
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
                .map(store => {
                  const categories = Object.keys(this.state.stores[store]['categories']).map(categ => {
                    return(this.state.stores[store]['categories'][categ]['name'])
                  })
                  return(
                    <StoreCard
                        name={this.state.stores[store]['title']}
                        key={this.state.stores[store]['uuid']}
                        img={this.state.stores[store]['heroImageUrl']}
                        link={this.state.stores[store]['link']}
                        priceBucket={this.state.stores[store]['priceBucket']}
                        categories={categories}
                        etaRangeMin={this.state.stores[store]['etaRange']['min']}
                        etaRangeMax={this.state.stores[store]['etaRange']['max']}
                        sellsAlcohol={this.state.stores[store]['sellsAlcohol']}
                        {...this.props}
                      />
                  )
                })
          }
        </Row>
        <Row center="xs">
          <Col lg={12} md={12} sm={12} xs={12}>
            { this.state.hasMore && <ButtonAdd addStores={this.addStores} loader={this.state.loader}/> }
          </Col>
        </Row>
      </Grid>
    );
  }

  addStores = () => {
    this.setState( {stores: this.state.stores.concat(this.state.next_stores)})
    this.setState( {hasMore: this.state.next_hasMore })
    fetch("https://itc-web1-server.now.sh/stores?limit=" + this.props.elem + "&offset=" + (this.state.stores.length + this.props.elem))
      .then(res => res.json())
      .then(json => {
        this.setState( {next_stores: json.payload.stores})
        this.setState( {next_hasMore: json.payload.hasMore })
      })
  }
}

export default Store
