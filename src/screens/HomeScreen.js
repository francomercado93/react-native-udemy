import React from 'react';
import { Text, StyleSheet, Button, View, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hola mundo!</Text>
      <Button
        title="Ir a Component"
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        title="Ir a List"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title="Ir a Image demo"
        onPress={() => navigation.navigate('Image')}
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