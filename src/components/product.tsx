import React from 'react';
import {View, Text} from 'react-native';
import {useTailwind} from 'tailwind-rn';

export function Product() {
  const tailwind = useTailwind();
  return (
    <View style={tailwind('rounded-lg flex-1 h-72')}>
      <View style={tailwind('bg-white p-2 absolute bottom-2 right-0 w-36')}>
        <Text>Product</Text>
        <Text style={tailwind('text-xl font-bold')}>$79.00</Text>
      </View>
    </View>
  );
}
