import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AkunScreen from '../screens/AkunScreen';
import TagihanScreen from '../screens/TagihanScreen';
import NotifikasiScreen from '../screens/NotifikasiScreen';
import BottomNavigation from '../components/BottomNavigation';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigation {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Tagihan" component={TagihanScreen} />
      <Tab.Screen name="Akun" component={AkunScreen} />
      <Tab.Screen name="Notifikasi" component={NotifikasiScreen} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
