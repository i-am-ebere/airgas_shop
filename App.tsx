import {TailwindProvider, useTailwind} from 'tailwind-rn';
import utilities from './tailwind.json';
import React from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import {Product} from './src/components/product';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
];

function App(): JSX.Element {
  return (
    /* @ts-ignore-next-line */
    <TailwindProvider utilities={utilities}>
      <MainApp />
    </TailwindProvider>
  );
}

function MainApp() {
  const tailwind = useTailwind();
  return (
    <SafeAreaView style={tailwind('mx-5')}>
      <View>
        <View style={tailwind('flex-row justify-between items-center')}>
          <View style={tailwind('')}>
            <Text style={tailwind('')}>Hello, Name</Text>
            <Text style={tailwind('font-bold text-lg')}>Good morning</Text>
          </View>
          <View>
            <Text style={tailwind('')}>Goooo</Text>
          </View>
        </View>

        <Text style={tailwind('font-bold text-2xl mt-5')}>
          Choose your style
        </Text>
      </View>
      <View>
        <FlatList
          numColumns={2}
          data={DATA}
          renderItem={({item}) => <Product />}
          // keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
