import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [ //array we want to display
        { name: '#1', age: 20 },
        { name: '#2', age: 20 },
        { name: '#3', age: 20 },
        { name: '#4', age: 20 },
        { name: '#5', age: 20 },
        { name: '#6', age: 20 },
        { name: '#7', age: 20 },
    ];

    return (
        <FlatList
            //horizontal    //this make the scroll horizontal rather than vertical
            showsHorizontalScrollIndicator={false} //these two lines hide the scroll bars
            showsVerticalScrollIndicator={false}
            keyExtractor={(friend) => friend.name} //assigning keys to each array item
            data={friends} // array to show
            renderItem={({ item }) => { //how to render each item on screen
                return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;