import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import ProductList from './Component/productList';

export default function App() {
  const [OutputText,setText] = useState("Test Native Button")
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>{OutputText}</Text>
      <Button onPress={() => {setText('Text Changed')}} title="Click Me"/>
      <Button onPress={() => {setText('Test Native Button')}} title="Revert Me"/>
      <ProductList/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
