import React from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';

import { Images } from '@/assets';
import Container from '@/components/Container';
import { signInAsync } from '@/core/store/auth/authReducer';
import { Colors, CommonSizes } from '@/core/theme';

import { useAppDispatch } from '../../core/store';

const SignIn = () => {
  const dispatch = useAppDispatch();

  const onSaga = () => {
    dispatch(signInAsync());
  };

  return (
    <Container style={styles.container}>
      <View style={styles.logoView}>
        <Image source={Images.duckLogo} style={styles.logo} />
      </View>

      <Button title="Sign In" onPress={onSaga} />
    </Container>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    padding: CommonSizes.spacing.mediumPlus,
  },
  logoView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  formContainer: {
    flex: 1,
    marginBottom: 40,
  },
  inputPassword: {
    marginTop: 16,
  },
  logo: {
    height: 80,
    width: 80,
  },
  btnView: {
    paddingHorizontal: CommonSizes.spacing.large,
  },
  desc: {
    fontSize: CommonSizes.font.medium,
    textAlign: 'center',
    paddingHorizontal: CommonSizes.spacing.large,
  },
  btnText: {
    color: Colors.black,
    fontWeight: 'bold',
  },
});
