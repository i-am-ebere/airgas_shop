import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NavStack} from './src/navStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeIcon from './src/assets/home-icon.svg';
import FavIcon from './src/assets/fav-icon.svg';
import CartIcon from './src/assets/cart-icon.svg';
import SearchIcon from './src/assets/search-icon.svg';
import {FavNavStack} from './src/screens/favNavStack';

const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  return (
    /* @ts-ignore-next-line */
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen
            name="Home"
            component={NavStack}
            options={{
              tabBarIcon: ({focused}) => (
                <HomeIcon
                  fill={focused ? 'red' : '#000'}
                  width={20}
                  height={20}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Favourites"
            component={FavNavStack}
            options={{
              tabBarIcon: ({focused}) => (
                <FavIcon
                  fill={focused ? 'red' : '#000'}
                  width={20}
                  height={20}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Cart"
            component={NavStack}
            options={{
              tabBarBadge: 1,
              tabBarIcon: ({focused}) => (
                <CartIcon
                  fill={focused ? 'red' : '#000'}
                  width={20}
                  height={20}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={NavStack}
            options={{
              tabBarIcon: ({focused}) => (
                <SearchIcon
                  fill={focused ? 'red' : '#000'}
                  width={20}
                  height={20}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}

export default App;
