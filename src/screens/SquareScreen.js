import React, { Reducer, useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    // state === { rojo: number, verde: number, azul: number};
    // action === { colorToChange: 'rojo' || 'verde' || 'azul', cantidad: 15 || -15}

    switch (action.colorToChange) {
        case 'rojo':
            return state.rojo + action.cantidad > 255 || state.red + action.cantidad < 0
                ? state
                : { ...state, rojo: state.rojo + action.cantidad };
        case 'verde':
            return state.verde + action.cantidad > 255 || state.verde + action.cantidad < 0
                ? state
                : { ...state, verde: state.verde + action.cantidad };
        case 'azul':
            return state.azul + action.cantidad > 255 || state.azul + action.cantidad < 0
                ? state
                : { ...state, azul: state.azul + action.cantidad };
        default:
            return state;
    }
}

const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, { rojo: 0, verde: 0, azul: 0 });
    // destructuracion
    const { rojo, verde, azul } = state;
    console.log(state);
    return (
        <View>
            <ColorCounter color="Rojo"
                onIncrease={() => dispatch({ colorToChange: 'rojo', cantidad: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'rojo', cantidad: -1 * COLOR_INCREMENT })}
            />

            <ColorCounter color="Azul"
                onIncrease={() => dispatch({ colorToChange: 'azul', cantidad: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'azul', cantidad: -1 * COLOR_INCREMENT })}
            />
            <ColorCounter color="Verde"
                onIncrease={() => dispatch({ colorToChange: 'verde', cantidad: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'verde', cantidad: -1 * COLOR_INCREMENT })}
            />
            <View style={{
                height: 200, width: 200, backgroundColor: `rgb(${rojo}, ${verde}, ${azul})`
            }}></View>
        </View>
    )
}

const styles = StyleSheet.create({})

export default SquareScreen;