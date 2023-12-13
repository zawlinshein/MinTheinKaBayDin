import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigator from './navigations/RootStackNavigator';

const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export default App;
