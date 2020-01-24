import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ColorScreen = () => {

    const [colors, setColors] = useState([]);

    return (
        <View>
            <Button
                title="Agregar un color"
                onPress={() => {
                    setColors([...colors, randomRgb()])
                }}
            />
            <FlatList
                data={colors}
                keyExtractor={color => color}
                renderItem={({ item }) => {
                    return (
                        <View style={{ height: 100, width: 100, backgroundColor: item }}></View>
                    )
                }}
            />
        </View>
    )
}

const randomRgb = () => {
    const rojo = Math.floor(Math.random() * 256)
    const verde = Math.floor(Math.random() * 256)
    const azul = Math.floor(Math.random() * 256)
    return `rgb(${rojo}, ${verde}, ${azul})`
}

const styles = StyleSheet.create({})

export default ColorScreen;