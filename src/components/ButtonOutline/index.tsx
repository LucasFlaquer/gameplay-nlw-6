import React from 'react'
import {
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
  View,
} from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import { styles } from './styles'

type Props = TouchableOpacityProps & {
  title: string
}

export function ButtonOutline({ title, ...rest }: Props) {
  return (
    <View style={styles.buttonWrapper}>
      <TouchableOpacity style={styles.container} {...rest}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}
