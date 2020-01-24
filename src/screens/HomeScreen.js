import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hola mundo!</Text>
      <Button
        title="Ir a Component Demo"
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        title="Ir a List Demo"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title="Ir a Image Demo"
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title="Ir a Counter Demo"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title="Ir a Color Demo"
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title="Ir a Square Demo"
        onPress={() => navigation.navigate('Square')}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;