import {TailwindProvider, useTailwind} from 'tailwind-rn';
import utilities from './tailwind.json';
import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import {Product} from './src/components/product';
import axios from 'axios';

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
  const [products, setProducts] = useState([]);
  const [hideMe, setHideMe] = useState(true);

  // useEffect(() => {
  //   //Always run
  // });

  // useEffect(() => {
  //   //will run once
  //   // componentDidMount
  // }, []);

  // useEffect(() => {
  //   //Will run once and after that run only when variable value changes
  //   // shouldComponentUpdate
  // }, [variable]);

  // useEffect(() => {
  //   return () => {
  //     // will unmount
  //   };
  // }, []);

  async function fetchProducts() {
    // axios.get('https://dummyjson.com/products').then(res => {
    //   console.log(JSON.stringify(res.data, null, 2));
    // });

    const res = await axios.get('https://dummyjson.com/products');
    console.log(JSON.stringify(res.data, null, 2));
  }

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
        {hideMe && <HideMe hideFunc={setHideMe} />}
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

function HideMe(props: any) {
  useEffect(() => {
    console.log('Hide me mounted');
    return () => {
      // will unmount
      console.log('Hide me is unmounted');
    };
  }, []);
  return (
    <View>
      <Text onPress={() => props.hideFunc(false)}>Hide Me</Text>
    </View>
  );
}

export default App;

//updated with loading state
import {TailwindProvider, useTailwind} from 'tailwind-rn';
import utilities from './tailwind.json';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {Product} from './src/components/product';
import axios from 'axios';

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
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetchProducts();
    }, 10000);
  }, []);

  async function fetchProducts() {
    const res = await axios.get('https://dummyjson.com/products');
    setProducts(res.data);
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
