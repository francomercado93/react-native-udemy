import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentScreen = () => {

    const nombre = "Franco"

    return (
        <View>
            <Text style={styles.textStyle}>Reat Native!</Text>
            <Text style={styles.subHeaderTextStyle}>Mi nombre es {nombre}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderTextStyle: {
        fontSize: 20
    }
})

export default ComponentScreen;