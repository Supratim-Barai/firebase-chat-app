import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/Login';
import Splash from '../screens/Splash';
import ChatPage from '../screens/ChatPage';

const Routes: FC = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Chat" component={ChatPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
