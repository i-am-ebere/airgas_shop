import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProductScreen} from './ProductScreen';
import {FavHomeScreen} from './FavHomeScreen';

const Stack = createNativeStackNavigator();
export function FavNavStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'FavHome'}>
      <Stack.Screen name="FavHome" component={FavHomeScreen} />
      <Stack.Screen
        options={{
          headerShown: true,
        }}
        name="ProductView"
        component={ProductScreen}
      />
    </Stack.Navigator>
  );
}
