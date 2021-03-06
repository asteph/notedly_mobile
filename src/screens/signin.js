import React from 'react';
import { Text } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useMutation } from '@apollo/client';

import UserForm from '../components/UserForm';
import Loading from '../components/Loading';
import { SIGNIN_USER } from '../gql/mutation';

const SignIn = (props) => {
  // store the token with a key value of 'token'
  // after the token is stored navigate to the app's main screen
  const storeToken = (token) => {
    SecureStore.setItemAsync('token', token).then(
      props.navigation.navigate('App')
    );
  };

  const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
    onCompleted: (data) => {
      storeToken(data.signIn);
    },
  });

  if (loading) return <Loading />;
  return (
    <React.Fragment>
      {error && <Text>Error signing in!</Text>}
      <UserForm 
        action={signIn}
        formType="signIn"
        navigation={props.navigation}
      />
    </React.Fragment>
  );
};

SignIn.navigationOptions = {
  title: 'Sign In',
};

export default SignIn;
