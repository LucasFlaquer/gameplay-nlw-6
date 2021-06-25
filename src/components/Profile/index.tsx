import {Alert, BackHandler, Modal, Text, View} from 'react-native'
import React, { useEffect } from 'react';

import { Avatar } from '../Avatar';
import { ModalView } from '../ModalView';
import { RectButton } from 'react-native-gesture-handler';
import { styles } from './styles'
import { useAuth } from '../../hooks/auth';

export function Profile() {
  const { user, signOut } = useAuth()
  function showUserName() {
    if(user.username.length >= 15)
      return user.firstName
    return user.username
  }
  function handleSignOut() {
    Alert.alert('Logout', 'Deseja sair do GamePlay?', 
    [
      {
        text: 'Não',
        style: 'cancel'
      },
      {
        text: 'Sim',
        onPress:() => {signOut()}
      }
    ]
    )
  }
  useEffect(() => {
    const backAction = () => {
      //open Modal
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, []);
  function handleCloseReturnModal() {

  }
  return (
    <View style={styles.container}>
      
      <RectButton onPress={handleSignOut}>
        <Avatar urlImage={user.avatar} />
      </RectButton>

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.username}>{showUserName()}</Text>
        </View>
        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
      <ModalView closeModal={handleCloseReturnModal}>
        <View>
          <RectButton>Cancelar</RectButton>
          <RectButton>Sair</RectButton>
        </View>
      </ModalView>
    </View>
  )
}