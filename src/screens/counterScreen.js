import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/common/Button';

const INCREMENT = 1

const reducer = (state, action) => {
    //state object and the change to make to it. 
    //state == {red: 0 ,......}. action == change_red || change_blue || change_green : colour, payload: amt
    switch (action.type) {
        case 'increase_counter':
            return { ...state, counter: state.counter + INCREMENT };
        case 'decrease_counter':
            return { ...state, counter: state.counter - INCREMENT };
        default:
            return state;
    }
}



const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { counter: 0 });
    const { counter } = state;

    return (
        <View>
            <Button title="Increase" onPress={() => { dispatch({ type: 'increase_counter', payload: INCREMENT }) }} />
            <Button title="Decrease" onPress={() => { dispatch({ type: 'decrease_counter', payload: INCREMENT }) }} />
            <Text>Current Count: {counter}</Text>
        </View>
    );
}
const styles = StyleSheet.create({

});

export default CounterScreen;