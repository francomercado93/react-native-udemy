import React, { useReducer } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const COUNTER_INCREMENT = 1;

const reducer = (state, action) => {

    // state === { counter: 0 }
    // action === { type: 'change_counter', payload: 1 }
    switch (action.type) {
        case 'increment':
            return { ...state, counter: state.counter + action.payload }
        case 'decrement':
            return { ...state, counter: state.counter - action.payload }
        default:
            return state;
    }
    return
}
const CounterScreen = () => {

    const [state, dispatch] = useReducer(reducer, { counter: 0 });

    return (
        <View>
            <Button
                title="Sumar"
                onPress={() => {
                    dispatch({ type: 'increment', payload: COUNTER_INCREMENT });
                }}
            />
            <Button
                title="Restar"
                onPress={() => {
                    dispatch({ type: 'decrement', payload: COUNTER_INCREMENT });
                }}
            />
            <Text>Contador: {state.counter}</Text>
        </View>
    )
}

// const CounterScreen = () => {
//     const [counter, setCounter] = useState(0);

//     return (
//         <View>
//             <Button
//                 title="Sumar"
//                 onPress={() => {
//                     setCounter(counter + 1);
//                 }}
//             />
//             <Button
//                 title="Restar"
//                 onPress={() => {
//                     setCounter(counter - 1);
//                 }}
//             />
//             <Text>Contador: {counter}</Text>
//         </View>
//     )
// }

const styles = StyleSheet.create({})

export default CounterScreen;