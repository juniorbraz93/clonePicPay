import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MatterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import PayButton from './components/payButton';

import HomeScreens from './screens/home';
import WalletScreens from './screens/wallet';
import PayScreens from './screens/pay';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: 'home',
  },
  Wallet: {
    lib: Ionicons,
    name: 'wallet',
  },
  Notifications: {
    lib: MatterialIcons,
    name: 'notifications',
  },
  Settings: {
    lib: MatterialIcons,
    name: 'settings',
  },
};

export default function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home "
      tabBarOptions={{
        style: {
          backgroundColor: '#131418',
          borderTopColor: 'rgba(255, 255, 255, 0, 2)',
        },
        activeTintColor: '#fff',
        inactiveTintColor: '#92929c',
      }}
      screenOptions={({route, navigation}) => ({
        tabBarIcon: ({color, size, focused}) => {
          if (route.name === 'Pay') {
            return (
              <PayButton
                focused={focused}
                onPress={() => navigation.navigate('Pay')}
              />
            );
          }
          const {lib: Icon, name} = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreens}
        options={{title: 'Inicio'}}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreens}
        options={{title: 'Carteira'}}
      />
      <Tab.Screen name="Pay" component={PayScreens} />
      <Tab.Screen
        name="Notifications"
        component={PayScreens}
        options={{title: 'Notifições'}}
      />
      <Tab.Screen
        name="Settings"
        component={PayScreens}
        options={{title: 'Configurações'}}
      />
    </Tab.Navigator>
  );
}
