import { Image, Text, View } from 'react-native'

import { ButtonIcon } from '../../components/ButtonIncon'
import IlustrationImg from '../../assets/illustration.png'
import React from 'react'
import { style } from './styles'
import { useNavigation } from '@react-navigation/native'

export function SignIn() {
  const navigation = useNavigation()

  function handleSignIn() {
    navigation.navigate('Home')  
  }

  return (
    <View style={style.container}>
      
      <Image source={IlustrationImg} style={style.image} resizeMode="stretch" />
      <View style={style.content}>
        <Text style={style.title}>
          Conecte-se{`\n`} 
          e organizesuas{`\n`} 
          jogatinas
        </Text>
        <Text style={style.subtitle}>Crie grupos para jogar seus games {`\n`}favoritos com seus amigos</Text>
        <ButtonIcon title='Entrar com Discord' onPress={handleSignIn}/>
      </View>
    </View>
  )
}