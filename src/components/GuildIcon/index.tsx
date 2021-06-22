import { Image } from 'react-native';
import React from 'react'
import { styles } from './styles'

export function GuildIcon() {
  const uri="https://logodownload.org/wp-content/uploads/2017/11/discord-logo-4-1.png"
  
  return (
    <Image source={{uri}} style={styles.image} resizeMode="cover" />
  )
}