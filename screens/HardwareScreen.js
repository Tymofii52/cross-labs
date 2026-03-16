import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, Image, Alert, Text, ActivityIndicator, ScrollView, Platform } from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import { Accelerometer } from 'expo-sensors';

// ДИНАМІЧНИЙ ІМПОРТ: Підключаємо карти тільки на мобільних пристроях
let MapView = null;
let Marker = null;
if (Platform.OS !== 'web') {
  const Maps = require('react-native-maps');
  MapView = Maps.default;
  Marker = Maps.Marker;
}

export default function HardwareScreen() {
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState(null);
  const [{ x, y, z }, setData] = useState({ x: 0, y: 0, z: 0 });

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Помилка', 'Потрібен доступ до галереї!');
      return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') return;
      let currentLoc = await Location.getCurrentPositionAsync({});
      setLocation(currentLoc.coords);
    })();

    let subscription;
    if (Platform.OS !== 'web') {
      subscription = Accelerometer.addListener(setData);
      Accelerometer.setUpdateInterval(100);
    }

    return () => {
      if (subscription) subscription.remove();
    };
  }, []);

  const textColor = x > 0.5 ? 'red' : 'green';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* 1. Камера та Галерея */}
      <View style={styles.section}>
        <Text style={styles.header}>1. Камера та Галерея</Text>
        <Button title="Обрати фото з галереї" onPress={pickImage} />
        {image && <Image source={{ uri: image }} style={styles.image} />}
      </View>

      {/* 2. GPS та Карти */}
      <View style={styles.section}>
        <Text style={styles.header}>2. GPS та Карти</Text>
        {Platform.OS === 'web' || !MapView ? (
          <Text style={styles.warningText}>Карти підтримуються лише на мобільних пристроях (Expo Go).</Text>
        ) : !location ? (
          <ActivityIndicator size="large" color="blue" />
        ) : (
          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
              }}
            >
              <Marker
                coordinate={{ latitude: location.latitude, longitude: location.longitude }}
                title="Ви тут"
              />
            </MapView>
          </View>
        )}
      </View>

      {/* 3. Акселерометр */}
      <View style={styles.section}>
        <Text style={styles.header}>3. Акселерометр</Text>
        {Platform.OS === 'web' ? (
          <Text style={styles.warningText}>Сенсори працюють лише на телефоні.</Text>
        ) : (
          <View style={styles.sensorBox}>
            <Text style={[styles.sensorText, { color: textColor }]}>
              Нахил по X: {x.toFixed(2)}
            </Text>
            <Text style={styles.sensorText}>Нахил по Y: {y.toFixed(2)}</Text>
            <Text style={styles.sensorText}>Нахил по Z: {z.toFixed(2)}</Text>
          </View>
        )}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center', backgroundColor: '#fff', maxWidth: 600, alignSelf: 'center', width: '100%' },
  section: { width: '100%', marginBottom: 30, alignItems: 'center', backgroundColor: '#f8f9fa', padding: 15, borderRadius: 10, borderWidth: 1, borderColor: '#dee2e6' },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 15, color: '#343a40' },
  image: { width: 200, height: 200, marginTop: 20, borderRadius: 10 },
  mapContainer: { width: '100%', height: 300, borderRadius: 10, overflow: 'hidden', marginTop: 10 },
  map: { width: '100%', height: '100%' },
  sensorBox: { alignItems: 'center', padding: 10 },
  sensorText: { fontSize: 20, fontWeight: 'bold', marginVertical: 5 },
  warningText: { color: 'red', textAlign: 'center', fontStyle: 'italic', marginTop: 10 }
});