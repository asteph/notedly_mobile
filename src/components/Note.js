import React from 'react';
import { ScrollView, Text } from 'react-native';
import styled from 'styled-components/native';
import Markdown from 'react-native-markdown-renderer';
import { format } from 'date-fns';

const NoteView = styled.ScrollView`
  padding: 10px;
`;

const Note = ({ note }) => {
  return (
    <NoteView>
      <Text>
        Note by {note.author.username} / Published{' '}
        {format(new Date(note.createdAt), 'MMM do yyyy')}
        <Markdown>{note.content}</Markdown>
      </Text>
    </NoteView>
  );
};

export default Note;
