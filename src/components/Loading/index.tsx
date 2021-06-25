import { ActivityIndicator, View } from 'react-native';

import React from 'react'
import { styles } from './styles'
import { theme } from '../../global/styles/theme';

type Props =  {
  
}

export function Loading({}: Props) {
  
  return (
    <View style={styles.container}> 
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </View>    
  )
}