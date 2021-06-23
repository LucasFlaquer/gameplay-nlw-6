import { TextInput, TextInputProps, View } from 'react-native'

import React from 'react'
import { RectButtonProps, } from 'react-native-gesture-handler'
import { styles } from './styles'
import { theme } from '../../global/styles/theme'

export function TextArea({...rest}:TextInputProps) {
  return (
   <TextInput
    style={styles.container}
    
    {...rest}
   />
  )
}