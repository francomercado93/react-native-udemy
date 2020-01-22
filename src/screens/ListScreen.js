import React from 'react'
import { View, FlatList, StyleSheet, Text } from "react-native"

const ListScreen = () => {
    const amigos = [
        { nombre: "Amigo 1", edad: 20 },
        { nombre: "Amigo 2", edad: 25 },
        { nombre: "Amigo 3", edad: 24 },
        { nombre: "Amigo 4", edad: 30 },
        { nombre: "Amigo 5", edad: 39 },
        { nombre: "Amigo 6", edad: 45 },
        { nombre: "Amigo 7", edad: 19 },
        { nombre: "Amigo 8", edad: 18 }
    ]
    return (
        <FlatList
            // Esta es una forma de proporcionar una key a cada elemento del array, la otra es agregar un campo
            // key para cada elemento(esta key es de tipo string).
            // OTROS PROPS DE FlatList
            // horizontal
            // showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={amigo => amigo.nombre}
            data={amigos}
            renderItem={({ item }) => {  //ES2015
                return (
                    <Text style={styles.textStyle}>{item.nombre} - Edad {item.edad}</Text>
                )
            }}
        // element === { item : { nombre: "Amigo x"}, index: 0}
        // renderItem={(element) => {
        //     return (
        //         <View>
        //             <Text>{element.item.nombre}</Text>
        //             <Text>{element.index}</Text>
        //         </View>)
        // }} />
        />
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
})

export default ListScreen;