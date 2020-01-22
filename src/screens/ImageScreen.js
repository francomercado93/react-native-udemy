import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail
                title="Bosque"
                imageSource={require('../../assets/forest.jpg')}
                score={9}></ImageDetail>
            <ImageDetail
                title="Playa"
                imageSource={require('../../assets/beach.jpg')}
                score={8}></ImageDetail>
            <ImageDetail
                title="Montaña"
                imageSource={require('../../assets/mountain.jpg')}
                score={9}></ImageDetail>
        </View>
    )
}

const styles = StyleSheet.create({})

export default ImageScreen;