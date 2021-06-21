import React from 'react'
import { View, Text , Image, StatusBar} from 'react-native'
import { ButtonIcon } from '../../components/ButtonIncon'

import { style } from './styles'
import IlustrationImg from '../../assets/illustration.png'

export function SignIn() {

  return (
    <View style={style.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Image source={IlustrationImg} style={style.image} resizeMode="stretch" />
      <View style={style.content}>
        <Text style={style.title}>Organize{`\n`} suas jogatinas{`\n`} facilmente</Text>
        <Text style={style.subtitle}>Crie grupos para jogar seus games {`\n`}favoritos com seus amigos</Text>
        <ButtonIcon title='Entrar com Discord' activeOpacity={0.7 }/>
      </View>
    </View>
  )
}