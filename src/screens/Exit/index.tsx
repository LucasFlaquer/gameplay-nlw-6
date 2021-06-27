import React from 'react'
import { Text, View } from 'react-native'

import { Button } from '../../components/Button'
import { ButtonOutline } from '../../components/ButtonOutline'
import { useAuth } from '../../hooks/auth'

import { styles } from './styles'

type Props = {
  closeModal: () => void
}

export function Exit({ closeModal }: Props) {
  const { signOut } = useAuth()
  function handleSignOut() {
    signOut()
  }
  return (
    <View style={styles.exitModal}>
      <View style={styles.titleContainer}>
        <Text style={styles.exitModalTitle}>Deseja sair do </Text>
        <Text style={styles.titleLogo}>Game</Text>
        <Text style={styles.titleLogoSpan}>Play</Text>
        <Text style={styles.titleLogo}>?</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonWrapper}>
          <ButtonOutline title='Não' onPress={closeModal} />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title='Sim' onPress={handleSignOut} />
        </View>
      </View>
    </View>
  )
}
