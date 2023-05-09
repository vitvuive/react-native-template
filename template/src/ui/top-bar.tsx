import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Icons } from '@/assets';

import { View } from './core';

const SIZE_ICON = 22;

export const TopBar = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View
      style={{ paddingTop: top + 8 }}
      className="flex-row py-3 px-5 justify-between">
      <Icons.MenuIcon height={SIZE_ICON} width={SIZE_ICON} />
      <View className="flex flex-row w-16 justify-between">
        <Icons.SearchIcon height={SIZE_ICON} width={SIZE_ICON} />
        <Icons.CartIcon height={SIZE_ICON} width={SIZE_ICON} />
      </View>
    </View>
  );
};
