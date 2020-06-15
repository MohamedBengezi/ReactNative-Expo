import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/common/Button';

const INCREMENT = 1

const reducer = (state, action) => {
    //state object and the change to make to it. 
    //state == {counter: 0}. action == increase || change_blue || change_green : colour, payload: amt
    switch (action.type) {
        case 'increase':
            return { ...state, counter: state.counter + INCREMENT };
        case 'decrease':
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
            <Button title="Increase" onPress={() => { dispatch({ type: 'increase', payload: INCREMENT }) }} />
            <Button title="Decrease" onPress={() => { dispatch({ type: 'decrease', payload: INCREMENT }) }} />
            <Text>Current Count: {counter}</Text>
        </View>
    );
}
const styles = StyleSheet.create({

});

export default CounterScreen;