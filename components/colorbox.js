import React from 'react';
import { Text, View, StyleSheet } from 'react-native'


const ColorBox = ({ colorName, colorHex }) => {
    const boxColor = {
        backgroundColor: colorHex,
        padding: 20,
        marginTop: 20

    }

    return (
        <View style={boxColor}>
            <Text style={styles.boxText}>{colorName} {colorHex}</Text>
        </View >
    )

}

const styles = StyleSheet.create({

    boxText: {
        color: 'white'
    }
})


export default ColorBox