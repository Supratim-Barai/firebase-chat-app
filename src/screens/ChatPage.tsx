import React, {FC, useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';

export interface User {
  _id: string | number;
  name?: string;
  avatar?: string | number;
}

export interface IMessage {
  _id: string | number;
  text: string;
  createdAt: Date | number;
  user: User;
  image?: string;
  video?: string;
  audio?: string;
  system?: boolean;
  sent?: boolean;
  received?: boolean;
  pending?: boolean;
}

const ChatPage: FC = () => {
  const [messages, setMessages] = useState<any>([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  return <View style={styles.root}></View>;
};

export default ChatPage;

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
  },
});
