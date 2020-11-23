import React from 'react';
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from 'apollo-link-context';
import * as SecureStore from 'expo-secure-store';

import getEnvVars from '../config';
import Screens from './screens';

const { API_URI } = getEnvVars();
const uri = API_URI;
const cache = new InMemoryCache();
const httpLink = createHttpLink({ uri });

// return the headers to the context
const authLink = setContext(async (_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: (await SecureStore.getItemAsync('token')) || '',
    },
  };
});

// configure Apollo Client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});

const Main = () => {
  // wrap our app in the ApolloProvider higher-order component
  return (
    <ApolloProvider client={client}>
      <Screens />
    </ApolloProvider>
  );
};

export default Main;
