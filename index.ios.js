'use strict'

import React, { Component } from 'react';
import {
    AppRegistry,
    NavigatorIOS
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import GoniLogin from './app/view/Login';
import GoniProjects from './app/view/ProjectList';
import GoniMain from './app/view/GoniMain';

class goniMobile extends Component {

    render() {
        return (
            <Router>
                <Scene key="GoniLogin" direction={'vertical'} duration={1} panHandlers={null} component={GoniLogin}  title="GoniLogin" initial={true} hideNavBar={true} />
                <Scene key="GoniProjects" direction={'vertical'} duration={1} panHandlers={null} component={GoniProjects} title="GoniProjects" hideTabBar={true} />
                <Scene key="GoniMain" direction={'vertical'} duration={1} panHandlers={null} component={GoniMain} title="GoniMain" hideTabBar={true} />
            </Router>
        );
    }
}
AppRegistry.registerComponent('goniMobile', () => goniMobile);
