import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Conversor from './src/Conversor';



export default function App() {
  return (
    <View style={styles.container}>

      <Conversor moeadaA="USD" moeadaB='BRL' sign="R$" />
      <Conversor moeadaA="BRL" moeadaB='USD' sign="US$" />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
