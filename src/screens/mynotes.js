import React from 'react';
import { ImagePropTypes, Text, View } from 'react-native';
import { useQuery } from '@apollo/client';

import NoteFeed from '../components/NoteFeed';
import Loading from '../components/Loading';
import { GET_MY_NOTES } from '../gql/query';

const MyNotes = (props) => {
  const { loading, error, data } = useQuery(GET_MY_NOTES);

  if (loading) return <Loading />;
  if (error) return <Text>Error loading notes</Text>;
  if (data.me.notes.length !== 0) {
    return <NoteFeed notes={data.me.notes} navigation={props.navigation} />;
  } else {
    return <Text>No notes yet</Text>;
  }
};

MyNotes.navigationOptions = {
  title: 'My Notes',
};

export default MyNotes;
