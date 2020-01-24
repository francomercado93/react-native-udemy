import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const TextScreen = () => {

    const [nombre, setNombre] = useState('');

    return (
        <View>
            <Text>Ingrese un nombre:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={nombre}
                onChangeText={(nuevoTexto) => { setNombre(nuevoTexto) }}
            />
            <Text>Mi nombre es: {nombre}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderWidth: 1,
        borderColor: 'black'
    }
})

export default TextScreen;