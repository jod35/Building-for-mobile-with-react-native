import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Platform} from 'react-native';
import styles from './style'

export default function App() {
  
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.boxText}>Box 1</Text>
      </View>
    </View>
  );
}

