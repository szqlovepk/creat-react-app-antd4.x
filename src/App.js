import React from 'react';
import { Button } from 'antd';
import Welcome from './Welcome';
import NotFound from './NotFound';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

const handleClick = (props) => {
  props.history.push('/welcome');
};

export default () => (
    <Router>
        <Switch>
            <Route exact path="/" render={(props) => <Button onClick={() => handleClick(props)}>click</Button>} />
            <Route path="/welcome" component={Welcome} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);