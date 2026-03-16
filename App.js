import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { UserProvider } from './context/UserContext';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ApiScreen from './screens/ApiScreen';
import FormScreen from './screens/FormScreen';
import StorageScreen from './screens/StorageScreen';
import HardwareScreen from './screens/HardwareScreen';
import FirebaseScreen from './screens/FirebaseScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Головна' }} />
          <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Деталі' }} />
          <Stack.Screen name="Api" component={ApiScreen} options={{ title: 'API (Лаб 7)' }} />
          <Stack.Screen name="Form" component={FormScreen} options={{ title: 'Форма (Лаб 8)' }} />
          <Stack.Screen name="Storage" component={StorageScreen} options={{ title: 'Сховище (Лаб 9)' }} />
          <Stack.Screen name="Hardware" component={HardwareScreen} options={{ title: 'Камера (Лаб 11)' }} />
          <Stack.Screen name="Firebase" component={FirebaseScreen} options={{ title: 'Firestore (Лаб 12)' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}