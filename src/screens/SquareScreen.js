import React, { Reducer, useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    // state === { rojo: number, verde: number, azul: number};
    // action === { type: 'change_rojo' || 'change_verde' || 'change_azul', payload: 15 || -15}

    switch (action.type) {
        case 'change_rojo':
            return state.rojo + action.payload > 255 || state.red + action.payload < 0
                ? state
                : { ...state, rojo: state.rojo + action.payload };
        case 'change_verde':
            return state.verde + action.payload > 255 || state.verde + action.payload < 0
                ? state
                : { ...state, verde: state.verde + action.payload };
        case 'change_azul':
            return state.azul + action.payload > 255 || state.azul + action.payload < 0
                ? state
                : { ...state, azul: state.azul + action.payload };
        default:
            return state;
    }
}

const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, { rojo: 0, verde: 0, azul: 0 });
    // destructuracion
    const { rojo, verde, azul } = state;
    return (
        <View>
            <ColorCounter color="Rojo"
                onIncrease={() => dispatch({ type: 'change_rojo', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'change_rojo', payload: -1 * COLOR_INCREMENT })}
            />

            <ColorCounter color="Azul"
                onIncrease={() => dispatch({ type: 'change_azul', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'change_azul', payload: -1 * COLOR_INCREMENT })}
            />
            <ColorCounter color="Verde"
                onIncrease={() => dispatch({ type: 'change_verde', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'change_verde', payload: -1 * COLOR_INCREMENT })}
            />
            <View style={{
                height: 200, width: 200, backgroundColor: `rgb(${rojo}, ${verde}, ${azul})`, alignSelf: 'center', bottom: 10
            }}></View>
        </View>
    )
}

const styles = StyleSheet.create({})

export default SquareScreen;