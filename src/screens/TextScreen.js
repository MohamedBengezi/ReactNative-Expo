import React, { useReducer } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Input from '../components/common/Input';

const reducer = (state, action) => {
    //state object and the change to make to it. 
    //state == {counter: 0}. action == increase || change_blue || change_green : colour, payload: amt
    switch (action.type) {
        case 'change_pass':
            return { ...state, pass: action.payload };
        default:
            return state;
    }
}

const onpassChange = (text) => {
    dispatch({ type: 'change_pass', payload: text })
}

const TextScreen = () => {
    const [state, dispatch] = useReducer(reducer, { pass: "", isLongEnough: false });
    const { pass } = state;

    return (
        <View>
            <Input
                label="Enter Password:"
                onChangeText={(newText) => dispatch({ type: 'change_pass', payload: newText })}
                value={pass}
                placeHolder="pass"
                secureTextEntry
            />

            <Text>pass: {pass}</Text>
            {pass.length < 5 ? <Text>pass must be at least 5 characters</Text> : null}
        </View>
        //label, value, onChangeText, placeHolder, secureTextEntry 
    );
};


const styles = StyleSheet.create({
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    }
});

export default TextScreen;