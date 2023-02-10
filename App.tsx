import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NavStack} from './src/navStack';

function App(): JSX.Element {
  return (
    /* @ts-ignore-next-line */
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <NavStack />
      </NavigationContainer>
    </TailwindProvider>
  );
}

export default App;
