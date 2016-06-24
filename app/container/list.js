import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableOpacity,
    ProgressBarAndroid
} from 'react-native';
import {Actions } from 'react-native-router-flux'
import {connect} from 'react-redux'
import {fetchList} from '../action/video'
import styles from '../style/style'
import Loading from '../components/loading'
class List extends Component {

    static defaultProps = {
        videoList:[]
    }

    constructor(props) {
        super(props)
        this.state = {
            ds: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        }
    }

    componentDidMount() {
        this.props.dispatch(fetchList())

    }

    renderRow(rowData) {
        return (
            <TouchableOpacity onPress={this._pressButton.bind(this)} style={styles.out}>
                <View style={styles.item}>
                    <Image style={styles.image} source={{uri:rowData.cover}}/>
                    <View style={styles.text}>
                        <Text>{rowData.title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    _pressButton() {
        Actions.detail()
    }

    render() {
        const {videoList}=this.props
        const {ds}=this.state

        return (
            <View style={styles.container}>
                {videoList.length==0&&<Loading />}

                <ListView
                    style={styles.list}
                    dataSource={ds.cloneWithRows(videoList)}
                    renderRow={(rowData) => this.renderRow(rowData)}
                />

            </View>
        );
    }
}
function mapStateToProps(state) {
    return {
        videoList: state.videoState.videoList
    }
}
export default connect(mapStateToProps)(List)
