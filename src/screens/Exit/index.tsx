import React from 'react'
import { Text, View } from 'react-native'

import { Button } from '../../components/Button'
import { ButtonOutline } from '../../components/ButtonOutline'

import { styles } from './styles'

export function Exit() {
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
          <ButtonOutline title='Não' />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title='Sim' />
        </View>
      </View>
    </View>
  )
}
