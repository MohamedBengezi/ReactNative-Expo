import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Button from '../components/common/Button';

const HomeScreen = ({ navigation }) => {
  const componentsBut = "Go to components demo"
  const listBut = 'Go to list demo'
  const imageBut = "Go to Image screen"
  const countBut = "Go to Counter screen"
  const colBut = "Go to Colour screen"
  const sqBut = "Go to Square"
  const textBut = "Go to Text"
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>


      <Button
        title={componentsBut}
        onPress={() => { navigation.navigate('Components') }} //navigates to the components screen
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
      <Button
        title={textBut}
        onPress={() => navigation.navigate('Text')} //navigates to the components screen
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
