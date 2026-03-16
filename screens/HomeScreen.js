import React, { useState, useContext } from 'react';
import { View, Text, Button, Image, StyleSheet, ScrollView, Modal } from 'react-native';
import { UserContext } from '../context/UserContext';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HomeScreen({ navigation }) {
  const { userName } = useContext(UserContext);
  const [count, setCount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.mainWrapper}>
      
      <Header title={`Вітаю, ${userName}!`} />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <Image 
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} 
          style={styles.logo} 
        />

        <View style={styles.counterBox}>
          <Text style={styles.countText}>Лічильник: {count}</Text>
          <View style={styles.btnRow}>
            <Button title="+" onPress={() => setCount(count + 1)} />
            <Button title="-" onPress={() => setCount(count - 1)} color="red" />
          </View>
        </View>

        <Button title="Показати модальне вікно" onPress={() => setModalVisible(true)} color="purple" />
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.modalBack}>
            <View style={styles.modalView}>
              <Text style={{marginBottom: 20}}>Це модальне вікно!</Text>
              <Button title="Закрити" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>

        <View style={styles.navMenu}>
          <Button title="Деталі (Лаб 4)" onPress={() => navigation.navigate('Details', { message: 'Привіт!' })} />
          <Button title="API (Лаб 7)" onPress={() => navigation.navigate('Api')} />
          <Button title="Форма (Лаб 8)" onPress={() => navigation.navigate('Form')} />
          <Button title="Сховище (Лаб 9)" onPress={() => navigation.navigate('Storage')} />
          <Button title="Камера (Лаб 11)" onPress={() => navigation.navigate('Hardware')} />
          <Button title="Firebase БД (Лаб 12)" onPress={() => navigation.navigate('Firebase')} />
        </View>

      </ScrollView>

      <Footer text="Всі права захищено © 2026" />
    </View>
  );
}

const styles = StyleSheet.create({

  mainWrapper: { 
    flex: 1, 
    backgroundColor: '#f8f9fa' 
  },

  scrollContent: { 
    padding: 20, 
    alignItems: 'center', 
    maxWidth: 600, 
    width: '100%', 
    alignSelf: 'center',
    paddingBottom: 40 
  },
  logo: { width: 100, height: 100, marginBottom: 20, marginTop: 10 },
  counterBox: { padding: 15, borderWidth: 1, borderRadius: 10, marginBottom: 20, width: '100%', backgroundColor: '#fff' },
  countText: { fontSize: 24, textAlign: 'center', marginBottom: 10 },
  btnRow: { flexDirection: 'row', justifyContent: 'space-around' },
  modalBack: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalView: { backgroundColor: 'white', padding: 30, borderRadius: 10, elevation: 5 },
  navMenu: { marginTop: 20, gap: 10, width: '100%' }
});