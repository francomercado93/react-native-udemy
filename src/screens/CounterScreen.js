import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);
    return (
        <View>
            <Button
                title="Sumar"
                onPress={() => {
                    setCounter(counter + 1);
                }}
            />
            <Button
                title="Restar"
                onPress={() => {
                    setCounter(counter - 1);
                }}
            />
            <Text>Contador: {counter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default CounterScreen;