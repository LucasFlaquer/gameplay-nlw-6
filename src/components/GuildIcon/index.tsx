import React from 'react'
import { Image, View } from 'react-native'

import DiscordSvg from '../../assets/discord.svg'
import { theme } from '../../global/styles/theme'
import { styles } from './styles'

const { CDN_IMAGE } = process.env

type Props = {
  guildId: string
  iconId: string | null
}

export function GuildIcon({ guildId, iconId }: Props) {
  const { transparent } = theme.colors
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`

  return (
    <View
      style={[
        styles.container,
        iconId ? { backgroundColor: transparent, padding: 2 } : {},
      ]}
    >
      {iconId ? (
        <Image source={{ uri }} style={styles.image} resizeMode='cover' />
      ) : (
        <DiscordSvg width={40} height={40} />
      )}
    </View>
  )
}
