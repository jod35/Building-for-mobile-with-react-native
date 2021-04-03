import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'
import ColorBox from './components/colorbox'

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topBox}>
        <ColorBox colorName="Cyan" colorHex="#33333" />

        <ColorBox colorName="Cyan" colorHex="#fff000" />

        <ColorBox colorName="Cyan" colorHex="#000000" />

        <ColorBox colorName="Cyan" colorHex="#f0f0f0" />

        <ColorBox colorName="Cyan" colorHex="#454545" />

      </View >
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }

})

export default App