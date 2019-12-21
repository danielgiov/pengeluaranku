import React from 'react';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Pengeluaran from './Pengeluaran';
import User from './User';
import Transaksi from './Transaksi';
import App from './App';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class MainRouter extends React.Component {
    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route path="/app" component={App}/>
                </Switch>
            </Router>
           
        )
    }
}

export default MainRouter;