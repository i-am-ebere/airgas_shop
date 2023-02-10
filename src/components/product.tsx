import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, LogBox, Pressable} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {IProduct} from '../types';

interface IProductProps {
  product: IProduct;
}

export function Product(props: IProductProps) {
  const tailwind = useTailwind();
  const navigation = useNavigation();
  return (
    <Pressable
      style={tailwind('rounded-lg flex-1 h-72')}
      onPress={() => {
        navigation.navigate('ProductView', {product: props.product});
      }}>
      <Image
        source={{uri: props.product.thumbnail}}
        resizeMode={'cover'}
        style={tailwind('flex-1')}
      />
      <View style={tailwind('bg-white p-2 absolute bottom-2 right-0 w-36')}>
        <Text numberOfLines={1}>{props.product.title}</Text>
        <Text style={tailwind('text-xl font-bold')}>
          ${props.product.price}
        </Text>
      </View>
    </Pressable>
  );
}
