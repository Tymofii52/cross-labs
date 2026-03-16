import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function StorageScreen() {
  const [name, setName] = useState('');
  const [storedName, setStoredName] = useState('');

  // Завантаження даних при старті екрана
  useEffect(() => {
    const loadName = async () => {
      const value = await AsyncStorage.getItem('userName');
      if (value) {
        setStoredName(value);
      }
    };
    loadName();
  }, []);

  // Функція для збереження даних
  const saveName = async () => {
    await AsyncStorage.setItem('userName', name);
    setStoredName(name);
    setName('');
  };

  // Функція для очищення даних
  const clearName = async () => {
    await AsyncStorage.removeItem('userName');
    setStoredName('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Збережене ім'я: {storedName}</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Введіть ім'я"
        value={name}
        onChangeText={setName}
      />
      
      <Button title="Зберегти" onPress={saveName} />
      
      {/* Додав відступ для кнопки очищення, щоб вони не злипалися */}
      <View style={{ marginTop: 10 }}>
        <Button title="Очистити" onPress={clearName} color="red" />
      </View>
    </View>
  );
}

// Стилі для цього екрана
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20 
  },
  title: { 
    fontSize: 20, 
    marginBottom: 20 
  },
  input: { 
    borderWidth: 1, 
    borderColor: '#ccc', 
    padding: 10, 
    width: '80%', 
    marginBottom: 10, 
    borderRadius: 5 
  }
});