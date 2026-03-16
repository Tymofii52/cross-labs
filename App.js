import React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Текст згідно з завданням */}
      <Text style={styles.text}>Привіт, React Native!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Займає весь екран
    backgroundColor: '#fff',
    justifyContent: 'center', // Центрування по вертикалі
    alignItems: 'center',     // Центрування по горизонталі
  },
  text: {
    fontSize: 24,             // Розмір шрифту
    color: 'blue',            // Синій колір за завданням
    fontWeight: 'bold',
    textAlign: 'center',      // Центрування тексту
  },
});