import React from 'react';
import { Text, View } from 'react-native';
import { useQuery } from '@apollo/client';

import Note from '../components/Note';
import { GET_NOTE } from '../gql/query';

const NoteScreen = (props) => {
  const id = props.navigation.getParam('id');
  const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error, note not found</Text>;

  return <Note note={data.note} />;
};

export default NoteScreen;
