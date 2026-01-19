import {
  NavigationContainer,
  NavigationIndependentTree,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Profile: { message?: string } | undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function resolveScreenModule(mod: any) {
  // Some JS/TS interop paths can produce nested { default: ... } wrappers.
  // React Navigation needs the final component value.
  let resolved = mod;
  for (let i = 0; i < 5; i += 1) {
    if (resolved && typeof resolved === 'object' && 'default' in resolved) {
      resolved = resolved.default;
      continue;
    }
    break;
  }
  return resolved;
}

// CRITICAL: screens live 2 levels up in ../../src/screens (do not edit screen files)
const HomeScreen = resolveScreenModule(require('../../src/screens/HomeScreen'));
const LoginScreen = resolveScreenModule(require('../../src/screens/LoginScreen'));
const RegisterScreen = resolveScreenModule(require('../../src/screens/RegisterScreen'));
const ProfileScreen = resolveScreenModule(require('../../src/screens/ProfileScreen'));

export default function TabIndex() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: true }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}