
import React, {Component} from 'react';
import List from './container/list'
import Detail from './container/detail'
import {Provider} from 'react-redux'
import configureStore from './store/createStore'
import {Router, Scene} from 'react-native-router-flux';

export default class App extends Component {

    render() {
        return (
            <Provider store={configureStore()}>
                <Router>
                    <Scene key="root">
                        <Scene key="list" component={List} title="列表" initial="true"/>
                        <Scene key="detail" component={Detail} title="详情"/>
                    </Scene>
                </Router>
            </Provider>
        );
    }
}

