'use strict'

import React,{Component} from "react"
import {View} from "react-native"
import Spinner from "react-native-spinkit"
import styles from '../style/style'
export default class Loading extends Component{
    static defaultProps = {
        color:"#333"
    }
    render(){
        return (
            <View style={styles.loading}>
                <Spinner type="FadingCircleAlt" color={this.props.color} size={30}/>
            </View>
        )
    }
}
