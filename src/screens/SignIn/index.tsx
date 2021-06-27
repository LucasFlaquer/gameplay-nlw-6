import React from 'react'
import { ActivityIndicator, Alert, Image, Text, View } from 'react-native'

import { Background } from '../../components/Background'
import { ButtonIcon } from '../../components/ButtonIncon'

import { useAuth } from '../../hooks/auth'
import { theme } from '../../global/styles/theme'
import IlustrationImg from '../../assets/illustration.png'
import { style } from './styles'

export function SignIn() {
  const { loading, signIn } = useAuth()

  async function handleSignIn() {
    try {
      await signIn()
    } catch (error) {
      Alert.alert(error)
    }
  }

  return (
    <Background>
      <View style={style.container}>
        <Image
          source={IlustrationImg}
          style={style.image}
          resizeMode='stretch'
        />
        <View style={style.content}>
          <Text style={style.title}>
            Conecte-se{`\n`}e organizesuas{`\n`}
            jogatinas
          </Text>
          <Text style={style.subtitle}>
            Crie grupos para jogar seus games {`\n`}favoritos com seus amigos
          </Text>
          {loading ? (
            <ActivityIndicator color={theme.colors.primary} />
          ) : (
            <ButtonIcon title='Entrar com Discord' onPress={handleSignIn} />
          )}
        </View>
      </View>
    </Background>
  )
}
