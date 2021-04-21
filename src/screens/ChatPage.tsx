import React, {FC, useEffect, useState} from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import database from '@react-native-firebase/database';
import {Button, TextInput} from 'react-native-paper';
import uuid from 'react-native-uuid';
import {COLLECTION_NAME} from '../consts';
import {GiftedChat} from 'react-native-gifted-chat';

const {width, height} = Dimensions.get('window');
const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;

export interface User {
  _id: string | number;
  name?: string;
  avatar?: string;
}

export interface IMessage {
  _id: string;
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
const User1: User = {
  _id: 'Agashi98',
  name: 'Anushil',
  avatar: 'https://avatars.githubusercontent.com/u/36631824?v=4',
};

const User2: User = {
  _id: 'imGoutamDas',
  name: 'Goutam',
  avatar: 'https://avatars.githubusercontent.com/u/38310972?v=4',
};

const User3: User = {
  _id: 'supi24',
  name: 'Supratim',
  avatar: 'https://avatars.githubusercontent.com/u/57599068?v=4',
};
const ChatPage: FC = () => {
  const [messages, setMessages] = useState<Array<IMessage>>([]);

  function writeUserData(text: Array<IMessage>) {
    console.log(text);

    const msg: IMessage = text[0];
    const chatId = msg._id;
    database().ref(`${COLLECTION_NAME.CHATS}/${chatId}`).set(msg);
  }

  useEffect(() => {
    database()
      .ref(COLLECTION_NAME.CHATS)
      .orderByValue()
      .on('value', function (snapshot: any) {
        let tempMsg: Array<IMessage> = [];
        snapshot.forEach((childSnapshot: any) => {
          var childData = childSnapshot.val();
          tempMsg.push(childData);
        });
        setMessages(tempMsg);
      });
  }, []);
  console.log(messages);

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => writeUserData(messages)}
      user={User1}
    />
  );
};

export default ChatPage;

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
  },
  loginText: {
    color: '#F5F5F5',
  },
  loginBtn: {
    height: 55,
    width: Devicewidth / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5566D',
    borderRadius: 10,
  },
});
