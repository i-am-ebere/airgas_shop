import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, ActivityIndicator, Text, FlatList} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {Product} from '../components/product';
import {IProduct} from '../types';

export function FavHomeScreen() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetchProducts();
    }, 1000);
  }, []);

  async function fetchProducts() {
    const res = await axios.get('https://dummyjson.com/products');
    setProducts(res.data.products);
    setIsLoading(false);
  }

  const tailwind = useTailwind();

  if (isLoading) {
    return (
      <View style={tailwind('flex-1 justify-center')}>
        <ActivityIndicator color={'red'} size={'large'} />
      </View>
    );
  }

  return (
    <SafeAreaView style={tailwind('mx-5')}>
      <Text>Fav Screen</Text>
      <View style={tailwind('')}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={products}
          renderItem={({item}) => <Product product={item} />}
          // keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
}
