import React from 'react';
import { View } from 'react-native';

type Props = {
  children: React.ReactNode;
};

export const Screen = ({ children }: Props) => (
  <View className="flex flex-1 flex-col bg-white">{children}</View>
);
