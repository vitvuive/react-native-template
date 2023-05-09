import React from 'react';
import { View, ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface IProps extends ViewProps {}

const Container = (props: IProps) => {
  const { bottom, top } = useSafeAreaInsets();
  return (
    <View style={[{ paddingTop: top }, props.style]}>{props.children}</View>
  );
};

export default Container;
