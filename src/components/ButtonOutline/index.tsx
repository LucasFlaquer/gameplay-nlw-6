import { Text, View } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import React from 'react'
import { styles } from './styles'

type Props = RectButtonProps & {
  title: string
}

export function ButtonOutline({ title, ...rest }: Props) {
  return (
    <View style={styles.buttonWrapper}>
      <RectButton style={styles.container} {...rest}>
        <Text style={styles.title}>{title}</Text>
      </RectButton>
    </View>
  )
}
