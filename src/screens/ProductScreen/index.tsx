import {useRoute} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Image, View, Text, Pressable} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {useCartItems} from '../../services/use-cart-service';

export function ProductScreen() {
  const tailwind = useTailwind();
  const routes = useRoute();
  const addCartItemHook = useCartItems();
  return (
    <SafeAreaView style={tailwind('flex-1 mx-4')}>
      <View style={tailwind('h-40 rounded-lg')}>
        <Image
          /* @ts-ignore */
          source={{uri: routes.params?.product.thumbnail}}
          resizeMode="cover"
          style={tailwind('flex-1 rounded-lg')}
        />
      </View>
      {/* @ts-ignore */}
      <Text>{routes.params?.product.title}</Text>
      <Pressable
        style={tailwind('bg-blue-600 rounded py-4')}
        onPress={() => {
          if (!routes.params?.product) {
            return;
          }
          addCartItemHook.addItemsToCart(routes.params?.product);
        }}>
        <Text style={tailwind('text-center text-white')}>Add to cart</Text>
      </Pressable>
    </SafeAreaView>
  );
}
