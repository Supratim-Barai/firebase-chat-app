import React, {FC, useState} from 'react';
import {Text, View, StyleSheet, Dimensions, Image} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
// @ts-ignore
import Logo from '../assets/images/logo.png';

const {width, height} = Dimensions.get('window');
const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;

const Login: FC = ({navigation}: any) => {
  const [user, setUser] = useState('user2345');

  const onLoginPress = () => {
    console.log(user);

    navigation.navigate('Chat');
  };

  return (
    <LinearGradient
      colors={['rgba(238,252,252,1)', '#38BDDC']}
      style={styles.image}>
      <View
        style={{
          marginBottom: 30,
        }}>
        <Image source={Logo} style={{height: 100, width: 100}} />
      </View>

      <View style={{marginTop: 20}}>
        <TextInput
          mode={'flat'}
          style={styles.textInput}
          onChangeText={value => setUser(value)}
          placeholder="User"
          value={user}
        />

       

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 25,
          }}>
          <Button contentStyle={styles.loginBtn} onPress={onLoginPress}>
            <Text style={styles.loginText}>Join</Text>
          </Button>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Login;

const styles = StyleSheet.create({
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
  textInput: {
    height: Deviceheight / 15,
    width: Devicewidth / 1.3,
    fontSize: 17,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF52',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signup: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 30,
    color: '#f6f6f6',
    fontWeight: 'bold',
  },
  signupView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: 30,
  },
  SocialButton: {
    height: 60,
    width: 60,
  },
  divider: {
    backgroundColor: '#FFFFFF52',
    width: '60%',
    height: 1.15,
    marginBottom: 10,
  },
});
