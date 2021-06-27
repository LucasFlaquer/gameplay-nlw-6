import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    height: 48,
    width: 48,
    backgroundColor: theme.colors.secondary40,
    borderRadius: 8,
    color: theme.colors.heading,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    marginRight: 4,
    textAlign: 'center',
    borderColor: theme.colors.secondary50,
    borderWidth: 1,
  },
})
