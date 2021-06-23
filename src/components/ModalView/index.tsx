import { Image, Modal, ModalProps, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import React, { ReactNode } from 'react'

import { Background } from '../Background';
import { style } from '../../screens/SignIn/styles';
import {styles} from './styles'

export type GuildProps = {
  id: string
  name: string
  icon: string | null
  owner: boolean
}

type Props = ModalProps & {
  children: ReactNode
}


export function ModalView({children, ...rest}:Props) {
   
  return (
    <Modal
      transparent
      animationType="slide"
      {...rest}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Background>
            <View style={styles.bar} />
            {children}
          </Background>
        </View>
      </View>
    </Modal>
  )
}