import React from 'react';
import { View, StyleSheet } from 'react-native';
// Імпортуємо наші компоненти
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Передаємо дані через props */}
      <Header title="Мій перший застосунок" />
      
      <View style={styles.content}>
        {/* Тут може бути основний контент пізніше */}
      </View>

      <Footer text="Розроблено студентом © 2026" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'space-between', // Розсуває Header і Footer до країв
    paddingVertical: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  }
});