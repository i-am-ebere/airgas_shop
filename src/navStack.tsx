import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProductHomeScreen} from './screens/ProductHomeScreen';
import {ProductScreen} from './screens/ProductScreen';
import {ProductWaitingScreen} from './screens/ProductWaitingScreen';

const Stack = createNativeStackNavigator();
export function NavStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'ProductHome'}>
      <Stack.Screen name="ProductHome" component={ProductHomeScreen} />
      <Stack.Screen
        options={{
          headerShown: true,
        }}
        name="ProductWaitingView"
        component={ProductWaitingScreen}
      />
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
