import React, { useReducer } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Button from '../components/common/Button';

const COLOUR_INCREMENT = 10

const reducer = (state, action) => {
    //state object and the change to make to it. 
    //state == {red: 0 ,......}. action == change_red || change_blue || change_green : colour, payload: amt
    switch (action.type) {
        case 'red':
            return (state.red + action.payload > 255 || state.red + action.payload < 0) ? state : { ...state, red: state.red + action.payload };
        case 'green':
            return (state.green + action.payload > 255 || state.green + action.payload < 0) ? state : { ...state, green: state.green + action.payload };
        case 'blue':
            return (state.blue + action.payload > 255 || state.blue + action.payload < 0) ? state : { ...state, blue: state.blue + action.payload };
        default:
            return state;
    }
}

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const { red, green, blue } = state;

    return (
        <View>
            <Button
                title="Add Red"
                onPress={() => dispatch({ type: 'red', payload: COLOUR_INCREMENT })}
            />

            <Button
                title="Remove Red"
                onPress={() => dispatch({ type: 'red', payload: -1 * COLOUR_INCREMENT })}
            />

            <Button
                title="Add Blue"
                onPress={() => dispatch({ type: 'blue', payload: COLOUR_INCREMENT })}
            />

            <Button
                title="Remove Blue"
                onPress={() => dispatch({ type: 'blue', payload: -1 * COLOUR_INCREMENT })}
            />

            <Button
                title="Add Green"
                onPress={() => dispatch({ type: 'green', payload: COLOUR_INCREMENT })}
            />
            <Button
                title="Remove Green"
                onPress={() => dispatch({ type: 'green', payload: -1 * COLOUR_INCREMENT })}
            />

            <View style={{ height: 100, width: 100, textAlign: 'center', backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />

        </View>
    );
};

const styles = StyleSheet.create({

});

export default SquareScreen;