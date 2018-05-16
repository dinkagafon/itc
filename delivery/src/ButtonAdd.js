import React from 'react';
import { Route, Link, Switch } from "react-router-dom";
import Button from './Button';

const ButtonAdd = (props) => (
  <Switch>
    <Route exact path="/" render={() => (
        <Link to="/stores">
          <Button>{props.loader ? "Загрузка.." : "Все рестораны"}</Button>
        </Link>
      )} />
    <Route path="/stores" render={() => (
        <Button onClick={props.addStores}>
            {props.loader ? "Загрузка.." : "Добавить рестораны"}
        </Button>
      )} />
    </Switch>
)
export default ButtonAdd
