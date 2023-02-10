import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProductScreen} from './ProductScreen';

const Stack = createNativeStackNavigator();
export function ProductWaitingScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ProductScreen}
        name={'ProductWaitingScreenHome'}
      />
    </Stack.Navigator>
  );
}
