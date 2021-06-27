import React from 'react'
import { Text, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import { Avatar } from '../Avatar'

import { useAuth } from '../../hooks/auth'

import { styles } from './styles'

export function Profile() {
  const { user } = useAuth()
  const userTitle = user.username.length >= 15 ? user.firstName : user.username
  return (
    <View style={styles.container}>
      <RectButton>
        <Avatar urlImage={user.avatar} />
      </RectButton>

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.username}>{userTitle}</Text>
        </View>
        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  )
}
