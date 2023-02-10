import {useRoute} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Image, View, Text} from 'react-native';
import {useTailwind} from 'tailwind-rn';

export function ProductScreen() {
  const tailwind = useTailwind();
  const routes = useRoute();
  return (
    <SafeAreaView style={tailwind('flex-1')}>
      <View style={tailwind('flex-1 rounded-lg')}>
        <Image
          /* @ts-ignore */
          source={{uri: routes.params?.product.thumbnail}}
          resizeMode="cover"
          style={tailwind('flex-1 rounded-lg')}
        />
      </View>
      {/* @ts-ignore */}
      <Text>{routes.params?.product.title}</Text>
    </SafeAreaView>
  );
}
