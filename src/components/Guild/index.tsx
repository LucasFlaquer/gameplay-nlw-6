import { Image, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import { Feather } from '@expo/vector-icons'
import { GuildIcon } from '../GuildIcon';
import React from 'react'
import { styles } from './styles'
import { theme } from '../../global/styles/theme';

export type GuildProps = {
  id: string
  name: string
  icon: string | null
  owner: boolean
}

type Props = TouchableOpacityProps & {
  data: GuildProps
}


export function Guild({data, ...rest}:Props) {
  const uri="https://gamerssuffice.com/wp-content/uploads/2019/11/How-to-add-bots-to-discord-500x405.jpg"
  
  return (
    // <Image source={{uri}} style={styles.image} resizeMode="cover" />
    <TouchableOpacity style={styles.container} {...rest}>
      <GuildIcon guildId={data.id} iconId={data.icon} />
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{data.name}</Text>
          <Text style={styles.type}>{data.owner ? 'Administrador' : 'Convidado'}</Text>
        </View>
      </View>
      <Feather name="chevron-right" color={theme.colors.heading} size={24} />

    </TouchableOpacity>
  )
}