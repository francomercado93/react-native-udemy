import React from 'react'
import { View, FlatList, StyleSheet, Text } from "react-native"

const ListScreen = () => {
    const amigos = [
        { nombre: "Amigo 1" },
        { nombre: "Amigo 2" },
        { nombre: "Amigo 3" },
        { nombre: "Amigo 4" },
        { nombre: "Amigo 5" },
        { nombre: "Amigo 6" },
        { nombre: "Amigo 7" },
        { nombre: "Amigo 8" }
    ]
    return (
        <FlatList
            // Esta es una forma de proporcionar una key a cada elemento del array, la otra es agregar un campo
            // key para cada elemento(esta key es de tipo string).
            keyExtractor={amigo => amigo.nombre}
            data={amigos}
            renderItem={({ item }) => {  //ES2015
                return (
                    <Text>{item.nombre}</Text>
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
})

export default ListScreen;