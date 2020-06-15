import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Button from '../components/common/Button';
import api_key from './azure_api_key.json';


const apiKey = api_key["api_key"]

const HomeScreen = ({ navigation }) => {
  const componentsBut = "Go to components demo"
  const listBut = 'Go to list demo'
  const imageBut = "Go to Image screen"
  const countBut = "Go to Counter screen"
  const colBut = "Go to Colour screen"
  const sqBut = "Go to Square"
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>


      <Button
        title={componentsBut}
        onPress={() => { console.log(apiKey); navigation.navigate('Components') }} //navigates to the components screen
      />

      <Button
        title={listBut}
        onPress={() => navigation.navigate('List')} //navigates to the components screen
      />

      <Button
        title={imageBut}
        onPress={() => navigation.navigate('Images')} //navigates to the components screen
      />
      <Button
        title={countBut}
        onPress={() => navigation.navigate('Counter')} //navigates to the components screen
      />
      <Button
        title={colBut}
        onPress={() => navigation.navigate('Colour')} //navigates to the components screen
      />
      <Button
        title={sqBut}
        onPress={() => navigation.navigate('Square')} //navigates to the components screen
      />
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
  }
});


export default HomeScreen;
