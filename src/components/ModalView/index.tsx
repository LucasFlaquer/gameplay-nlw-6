import React, { ReactNode } from 'react'
import { Modal, ModalProps, TouchableWithoutFeedback, View } from 'react-native'

import { Background } from '../Background'
import { styles } from './styles'

type Props = ModalProps & {
  children: ReactNode
  height?: number | string
  closeModal: () => void
}

export function ModalView({
  children,
  closeModal,
  height = 0,
  ...rest
}: Props) {
  function handleOutClick() {
    closeModal()
  }
  return (
    <Modal transparent animationType='slide' statusBarTranslucent {...rest}>
      <TouchableWithoutFeedback onPress={handleOutClick}>
        <View style={styles.overlay}>
          <View
            style={[styles.container, height > 0 ? { marginTop: height } : {}]}
          >
            <Background>
              {height === 0 && <View style={styles.bar} />}
              {children}
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}
