import React from 'react';
import {View, Text, Image, LogBox} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {IProduct} from '../types';

interface IProductProps {
  product: IProduct;
}

export function Product(props: IProductProps) {
  const tailwind = useTailwind();
  console.log(props.product.thumbnail);
  return (
    <View style={tailwind('rounded-lg flex-1 h-72')}>
      <Image
        source={{uri: props.product.thumbnail}}
        resizeMode={'cover'}
        style={{flex: 1}}
      />
      <View style={tailwind('bg-white p-2 absolute bottom-2 right-0 w-36')}>
        <Text numberOfLines={1}>{props.product.title}</Text>
        <Text style={tailwind('text-xl font-bold')}>
          ${props.product.price}
        </Text>
      </View>
    </View>
  );
}
