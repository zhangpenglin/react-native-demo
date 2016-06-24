import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableOpacity,
    Navigator
} from 'react-native';
import styles from '../style/style'

export default class Detail extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>这里是详情页</Text>
                <Text>这里是详情页</Text>
                <Text>这里是详情页</Text>
                <Text>这里是详情页</Text>
                <Text>这里是详情页</Text>
            </View>
        );
    }
}
