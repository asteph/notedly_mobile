import React from 'react';
import { ImagePropTypes, Text, View } from 'react-native';
import { useQuery } from '@apollo/client';

import NoteFeed from '../components/NoteFeed';
import Loading from '../components/Loading';
import { GET_MY_FAVORITES } from '../gql/query';

const Favorites = (props) => {
  const { loading, error, data } = useQuery(GET_MY_FAVORITES);

  if (loading) return <Loading />;
  if (error) return <Text>Error loading notes</Text>;
  if (data.me.favorites.length !== 0) {
    return <NoteFeed notes={data.me.favorites} navigation={props.navigation} />;
  } else {
    return <Text>No notes yet</Text>;
  }
};

export default Favorites;
