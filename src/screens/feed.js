import React from 'react';
import { Text } from 'react-native';
import { useQuery } from '@apollo/client';

import NoteFeed from '../components/NoteFeed';
import { GET_NOTES } from '../gql/query';

const Feed = (props) => {
  // query hook
  const { loading, error, data } = useQuery(GET_NOTES);

  // if the data is loading, display a loading message
  if (loading) return <Text>Loading...</Text>;
  // if there is an error fetching the data, display an error message
  if (error) return <Text>Error loading notes</Text>;

  return <NoteFeed notes={data.notes} navigation={props.navigation} />;
};

export default Feed;
