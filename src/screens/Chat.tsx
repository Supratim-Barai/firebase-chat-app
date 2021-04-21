import React, {FC, useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
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

const Chat: FC = () => {
  return <Text>Chat</Text>;
};

export default Chat;
