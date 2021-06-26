import { Text, View } from 'react-native'
import React from 'react'

import { Avatar } from '../Avatar'
import { RectButton } from 'react-native-gesture-handler'
import { styles } from './styles'
import { useAuth } from '../../hooks/auth'

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
