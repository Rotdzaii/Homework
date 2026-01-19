import {
  NavigationContainer,
  NavigationIndependentTree,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

type RootStackParamList = {
  Dashboard: undefined;
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Profile: { message?: string } | undefined;
  TodoList: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function resolveScreenModule(mod: any) {
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

const DashboardScreen = resolveScreenModule(require('../../src/screens/DashboardScreen'));
const HomeScreen = resolveScreenModule(require('../../src/screens/HomeScreen'));
const LoginScreen = resolveScreenModule(require('../../src/screens/LoginScreen'));
const RegisterScreen = resolveScreenModule(require('../../src/screens/RegisterScreen'));
const ProfileScreen = resolveScreenModule(require('../../src/screens/ProfileScreen'));
const TodoListScreen = resolveScreenModule(require('../../src/screens/TodoListScreen'));

export default function TabIndex() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Dashboard" screenOptions={{ headerShown: true }}>
          <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ title: 'Bảng điều khiển' }} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="TodoList" component={TodoListScreen} options={{ title: 'Task 2: Danh sách API' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}