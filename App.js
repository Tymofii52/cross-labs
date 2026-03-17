import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import * as Sentry from 'sentry-expo';

// Sentry.init({
//   dsn: 'https://a0fdfad4fe8b105942dcdb350c995f39@o4511061489942528.ingest.de.sentry.io/4511061494464592', 
//   enableInExpoDevelopment: true,
//   debug: true,
// });

import { UserProvider } from './context/UserContext';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ApiScreen from './screens/ApiScreen';
import FormScreen from './screens/FormScreen';
import StorageScreen from './screens/StorageScreen';
import HardwareScreen from './screens/HardwareScreen';
import FirebaseScreen from './screens/FirebaseScreen';
import AnalyticsScreen from './screens/AnalyticsScreen'; 

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
          <Stack.Screen name="Analytics" component={AnalyticsScreen} options={{ title: 'Аналітика (Лаб 13)' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}