import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { Container } from '@/components';
import { useAppDispatch } from '@/core/store';
import { globalSlice } from '@/core/store/global/globalReducer';
import { CommonSizes } from '@/core/theme';

const Menu = () => {
  const dispatch = useAppDispatch();

  const onLogOut = () => dispatch(globalSlice.actions.setIsLogin(false));

  return (
    <Container style={styles.container}>
      <View>
        <Text>MENU</Text>
      </View>

      <Button onPress={onLogOut} title="Log out" />
    </Container>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: CommonSizes.spacing.medium,
    justifyContent: 'space-between',
  },
  cartContainer: {
    borderRadius: CommonSizes.borderRadius.large,
    padding: CommonSizes.spacing.medium,
  },
  icon: { width: 20, height: 20, marginRight: CommonSizes.spacing.small },
  itemContainer: { marginVertical: 12 },
  sectionTitle: {
    marginBottom: CommonSizes.spacing.extraSmall,
    marginTop: 50,
  },
});
