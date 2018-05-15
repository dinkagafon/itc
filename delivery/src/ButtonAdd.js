import React from 'react';
import { Route, Link, Switch } from "react-router-dom";
import Button from './Button';

const LinkStores = () => (
  <Link to="/stores"><Button>Все рестораны</Button></Link>
)

const ButtonAdd = (props) => (
  <Switch>
    <Route exact path="/" component={LinkStores} />
    <Route path="/stores" render={() => (
        <Button onClick={props.addStores}>
          Добавить рестораны
        </Button>
      )} />
    </Switch>
)
export default ButtonAdd
