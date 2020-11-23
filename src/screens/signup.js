import React from 'react';
import { Text } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useMutation } from '@apollo/client';

import UserForm from '../components/UserForm';
import Loading from '../components/Loading';
import { SIGNUP_USER } from '../gql/mutation';

const SignUp = (props) => {
  // store the token with a key value of 'token'
  // after the token is stored navigate to the app's main screen
  const storeToken = (token) => {
    SecureStore.setItemAsync('token', token).then(
      props.navigation.navigate('App')
    );
  };

  const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
    onCompleted: (data) => {
      storeToken(data.SignUp);
    },
  });

  if (loading) return <Loading />;
  return (
    <React.Fragment>
      {error && <Text>Error signing up!</Text>}
      <UserForm 
        action={signUp}
        formType="signUp"
        navigation={props.navigation}
      />
    </React.Fragment>
  );
};

SignUp.navigationOptions = {
  title: 'Register',
};

export default SignUp;
