import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import {Text, View} from 'react-native'

import { Avatar } from '../Avatar';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import {SvgProps}from 'react-native-svg'
import { style } from '../../screens/SignIn/styles';
import { styles } from './styles'
import { theme } from '../../global/styles/theme';

export type MemberProps = {
  id: string
  username: string
  avatar_url: string
  status: string
}

type Props = {
  data: MemberProps
}

export function Member({data}: Props) {
  const isOnline = data.status === 'online'
  const {on, primary} = theme.colors
  return (
    <View style={styles.container}>
      <Avatar urlImage={data.avatar_url}/>

      <View>
        <Text style={styles.title}>{data.username}</Text>
        <View style={styles.status}>
          <View 
            style={[
              styles.bulletStatus, 
              {backgroundColor: isOnline ? on : primary }]} 
          />
          <Text style={styles.nameStatus}>
            {isOnline ? 'Disponível' : 'Ocupado'}
          </Text>
        </View>
      </View>
    </View>
  )
}