import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Button from '../components/common/Button';

const ColourScreen = () => {
    const [colours, setColours] = useState([])
    console.log(colours)

    return (
        <View>
            <Button
                title="Add a colour"
                onPress={() => { //add a new random colour to colours state var when button is pressed
                    setColours([...colours, randomRGB()])
                }}
            />

            <FlatList //generate a list of colours with latest addition
                data={colours}
                keyExtractor={item => item}
                renderItem={({ item }) => { return <View style={{ height: 100, width: 100, backgroundColor: item }} /> }}
            />
        </View>
    );
};

//create a random colour
const randomRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({

});

export default ColourScreen;