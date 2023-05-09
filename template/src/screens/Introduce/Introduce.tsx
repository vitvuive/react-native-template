import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

import { Images } from '@/assets';
import { useAppDispatch } from '@/core/store';
import { globalSlice } from '@/core/store/global/globalReducer';
import { CommonSizes } from '@/core/theme/commonSizes';

const Introduce = () => {
  const dispatch = useAppDispatch();
  const onPress = () => dispatch(globalSlice.actions.setIntroLoaded(true));

  return (
    <View style={styles.container}>
      <View style={styles.logoView}>
        <Image source={Images.duckLogo} style={styles.logo} />
      </View>

      <View style={styles.containerBottom}>
        <Text style={styles.desc}>{'Welcome to Duck'}</Text>
        <Text style={{ textAlign: 'center' }}>
          {'A template you application for start quickly!'}
        </Text>
        <Button title="Start" onPress={onPress} />
      </View>
    </View>
  );
};

export default Introduce;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  logoView: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 80,
  },
  containerBottom: {
    paddingHorizontal: CommonSizes.spacing.large,
    flex: 1,
    justifyContent: 'space-evenly',
  },
  title: {
    textAlign: 'center',
    fontSize: CommonSizes.font.extraLarge,
    fontWeight: '600',
  },
  desc: {
    textAlign: 'center',
  },
});
