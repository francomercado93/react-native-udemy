import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button
                title={`Incrementar ${color}`}
                onPress={() => { onIncrease() }} />
            <Button
                title={`Disminuir ${color}`}
                onPress={() => { onDecrease() }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default ColorCounter;