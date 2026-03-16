import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Counter = () => {
  // count - поточне значення, setCount - функція для зміни
  const [count, setCount] = useState(0);

  return (
    <View style={styles.counterContainer}>
      <Text style={styles.label}>Поточне значення:</Text>
      <Text style={styles.countText}>{count}</Text>
      
      <View style={styles.buttonGroup}>
        <View style={styles.buttonWrapper}>
          <Button 
            title="Збільшити (+)" 
            onPress={() => setCount(count + 1)} 
            color="green"
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button 
            title="Зменшити (-)" 
            onPress={() => setCount(count - 1)} 
            color="red"
          />
        </View>
      </View>
      
      {/* Додаткова кнопка для скидання (опціонально) */}
      <View style={styles.resetButton}>
        <Button title="Скинути" onPress={() => setCount(0)} color="gray" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  counterContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3, // Тінь для Android
    shadowColor: '#000', // Тіні для iOS/Web
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  label: {
    fontSize: 18,
    color: '#555',
  },
  countText: {
    fontSize: 48,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#222',
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 10, // Сучасний спосіб задати відстань
  },
  buttonWrapper: {
    minWidth: 100,
  },
  resetButton: {
    marginTop: 15,
    width: '100%',
  }
});

export default Counter;