import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AlertExample from './components/util/Alert.js'


class InstaClone extends Component {
    
    render() {
        return(
            <View style={{ flex: 1, width: 100 +'%', height: 100 + '%'}}>
                <View style={styles.tempNav}>
                    <Text>Instagram</Text>
                </View>

                <Image
                style={{width: 100 + "%", height: 350}}
                source={{uri: "https://lh3.googleusercontent.com/Y2kCI6riABsiffediPfJexTsliZf2jq-1_f0_FMfz1l6zcVBJkHlHYs5DcQvwUA1ct5BhalyHMoIfomTS4zKtPjG"}}/>

                <View style={styles.tempNav}>
                    <AlertExample/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tempNav: {
        width: 100 + '%',
        height: 56,
        marginTop: 44,
        backgroundColor: "rgb(250,250,250)",
        borderBottomColor: "rgb(233,233,233)",
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default InstaClone