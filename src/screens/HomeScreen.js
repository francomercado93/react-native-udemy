import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hola mundo!</Text>
      <Button
        title="Component Demo"
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        title="List Demo"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title="Image Demo"
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title="Counter Demo"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title="Color Demo"
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title="Square Demo"
        onPress={() => navigation.navigate('Square')}
      />
      <Button
        title="Text Demo"
        onPress={() => navigation.navigate('Text')}
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