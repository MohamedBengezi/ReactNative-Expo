import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/common/ImageDetail'

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Forest" img={require("../../assets/forest.jpg")} />
            <ImageDetail title="Mountain" img={require("../../assets/mountain.jpg")} />
            <ImageDetail title="Beach" img={require("../../assets/beach.jpg")} />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default ImageScreen;