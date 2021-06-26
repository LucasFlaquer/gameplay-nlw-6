import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  exitModal: {
    flex: 1,
    padding: 15,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 23,
  },
  exitModalTitle: {
    color: theme.colors.heading,
    fontSize: 24,
    fontFamily: theme.fonts.title500,
    textAlign: 'center',
  },
  titleLogo: {
    fontWeight: 'bold',
    fontSize: 25,
    fontFamily: theme.fonts.title500,
    color: theme.colors.heading,
  },
  titleLogoSpan: {
    fontWeight: 'bold',
    fontSize: 24,
    fontFamily: theme.fonts.title500,
    color: theme.colors.primary,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonWrapper: {
    width: '45%',
  },
})
