/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    Navigator,
    StyleSheet,
    Platform,
    TouchableOpacity,
    Text,
    View
} from 'react-native';
import List from './container/list'
import styles from'./style/style'
import {Provider} from 'react-redux'
import configureStore from './store/createStore'

const defaultRoute = {
    component: List
};

export default class App extends Component {
    _renderScene(route, navigator) {
        let Component = route.component;
        return (
            <Component {...route.params} navigator={navigator}/>
        );
    }

    _renderNavBar() {

        const routeMapper = {
            LeftButton(route, navigator, index, navState) {
                if (index > 0) {
                    return (
                        <TouchableOpacity
                            onPress={() => navigator.pop()}
                            style={styles.button}>
                            <Text style={styles.buttonText}>Back</Text>
                        </TouchableOpacity>
                    );
                } else {
                    return (
                        <TouchableOpacity
                            onPress={() => navigator.pop()}
                            style={styles.button}>
                            <Text style={styles.buttonText}>Logo</Text>
                        </TouchableOpacity>
                    );
                }
            },
            RightButton(route, navigator, index, navState) {
                if (index > 0 && route.rightButton) {
                    return (
                        <TouchableOpacity
                            onPress={() => navigator.pop()}
                            style={styles.button}>
                            <Text style={styles.buttonText}></Text>
                        </TouchableOpacity>
                    );
                } else {
                    return null
                }

            },
            Title(route, navigator, index, navState) {
                return (
                    <View style={styles.title}>
                        <Text style={styles.buttonText}>{route.title ? route.title : 'Splash'}</Text>
                    </View>
                );
            }
        };

        return (
            <Navigator.NavigationBar
                style={styles.navigationBar}
                routeMapper={routeMapper}
            />
        );
    }

    render() {
        return (
            <Provider store={configureStore()}>
            <Navigator
                initialRoute={defaultRoute}
                renderScene={this._renderScene}
                sceneStyle={{paddingTop: (Platform.OS === 'android' ? 56: 74)}}
                navigationBar={this._renderNavBar()}
            />
            </Provider>
        );
    }
}

