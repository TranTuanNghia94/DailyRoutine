import {StyleSheet} from 'react-native';
import {spacing} from '../../utils/size';
import {bg} from '../../utils/color';

export const styles = StyleSheet.create({
  contentCenter: {
    justifyContent: 'center',
  },
  fullWidth: {
    width: '100%',
    marginVertical: spacing.large,
  },
  txtLabel: {
    textAlign: 'center',
    marginBottom: spacing.medium,
    fontWeight: 'bold',
    color: bg.bgPrimary10,
  },
  imageContainer: {
    justifyContent: 'center',
    width: '55%',
    height: '25%',
    borderRadius: 100,
  },
  welcomeImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 100,
  },
  leftIconInput: {
    marginRight: spacing.small,
  },
  btn: {
    paddingVertical: spacing.medium,
    borderRadius: 10,
    fontWeight: 'bold',
    backgroundColor: bg.bgPrimary10,
  },
  txtBtn: {
    fontWeight: 'bold',
  },
});
