import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  Image,
  View,
  Text,
  Platform,
  Pressable,
} from 'react-native';
import {useTailwind} from 'tailwind-rn';

export function ProductScreen() {
  const tailwind = useTailwind();
  const routes = useRoute();
  const navigation = useNavigation();
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
      <Text>iOS Users ONLY should see this</Text>
      <Pressable
        onPress={() => {
          navigation.navigate('ProductHome');
        }}>
        <Text>Go to Main</Text>
      </Pressable>
    </SafeAreaView>
  );
}
