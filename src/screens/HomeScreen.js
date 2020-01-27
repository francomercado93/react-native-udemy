import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.parentStyle}>
      <Text style={styles.text}>App Demo</Text>
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
      <Button
        title="Box Demo"
        onPress={() => navigation.navigate('Box')}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  parentStyle: {
    marginHorizontal: 30,
    justifyContent: 'space-between',
    height: 500
  },
});

export default HomeScreen;