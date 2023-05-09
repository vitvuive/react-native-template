import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Icons } from '@/assets';
import Favorite from '@/screens/Favorite/Favorite';
import Home from '@/screens/Home/Home';
import Menu from '@/screens/Menu/Menu';
import Report from '@/screens/Report/Report';
import colors from '@/ui/theme/colors';

import { TBottomTabParamList } from './type';

const Tab = createBottomTabNavigator<TBottomTabParamList>();
const SIZE_ICON = 20;
const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icons.HomeIcon
              height={SIZE_ICON}
              width={SIZE_ICON}
              stroke={focused ? colors.black : colors.neutral[300]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Report"
        component={Report}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icons.ScanIcon
              height={SIZE_ICON}
              width={SIZE_ICON}
              stroke={focused ? colors.black : colors.neutral[300]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icons.HeartIcon
              height={SIZE_ICON}
              width={SIZE_ICON}
              stroke={focused ? colors.black : colors.neutral[300]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icons.UserIcon
              height={SIZE_ICON}
              width={SIZE_ICON}
              stroke={focused ? colors.black : colors.neutral[300]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
