import React from 'react';
import { StyleSheet, View } from 'react-native';

const BoxScreen = () => {

    return (
        <View style={styles.parentStyle}>
            <View style={styles.viewOneStyle}></View>
            <View style={styles.viewTwoStyle}></View>
            <View style={styles.viewThreeStyle}></View>
        </View>
    )
}

const styles = StyleSheet.create({

    parentStyle: {
        borderColor: 'black',
        borderWidth: 2,
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'flex-start',
    },
    viewOneStyle: {
        width: 100,
        height: 100,
        backgroundColor: 'rgb(180,100,100)'
    },
    viewTwoStyle: {
        width: 100,
        height: 100,
        backgroundColor: 'rgb(100,180,100)',
        alignSelf: 'flex-end'
        // Otras formas
        // top: 100,
        // marginTop: 100
    },
    viewThreeStyle: {
        width: 100,
        height: 100,
        backgroundColor: 'rgb(100,100,180)'
    },
})

export default BoxScreen;