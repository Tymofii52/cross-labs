import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Alert } from 'react-native';


export default function AnalyticsScreen() {
  const [email, setEmail] = useState('');

  
  const handleIdentify = () => {
    if (!email) {
      Alert.alert('Помилка', 'Введіть email');
      return;
    }
    

    console.log(`[Amplitude Mock] Користувача ${email} ідентифіковано`);
    Alert.alert('Успіх', `Користувача ${email} ідентифіковано (див. консоль)`);
  };

  const handleTrackEvent = () => {
   
    
    console.log('[Amplitude Mock] Подія "Button_Clicked" відправлена');
    Alert.alert('Подія відправлена', 'Тестова подія зафіксована у консолі');
  };

  const crashMyApp = () => {
  
    console.log('[Sentry Mock] Згенеровано критичну помилку!');
    Alert.alert('Sentry Crash', 'Додаток імітував падіння для звіту Sentry');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Продуктова аналітика</Text>

      <View style={styles.section}>
        <Text style={styles.subtitle}>1. Amplitude (Аналітика)</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Введіть ваш Email" 
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Button title="Ідентифікувати користувача" onPress={handleIdentify} color="#008CBA" />
        <View style={{ height: 10 }} />
        <Button title="Відправити тестову подію" onPress={handleTrackEvent} color="green" />
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>2. Sentry (Моніторинг помилок)</Text>
        <Button title="Згенерувати помилку (Crash)" onPress={crashMyApp} color="red" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8f9fa' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  section: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 20, elevation: 2 },
  subtitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15, borderRadius: 5 }
});