import {StyleSheet} from 'react-native';
import {spacing, bg, fontSizes} from '../../utils/index';

export const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: bg.bgPrimary5,
    marginVertical: spacing.medium,
    borderRadius: spacing.small,
    borderColor: bg.bgPrimary5,
  },
  taskTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textTitle: {
    fontSize: fontSizes.large,
    fontWeight: 'bold',
  },
  textDescription: {
    marginTop: spacing.small,
  },
  divider: {
    marginVertical: spacing.medium,
  },
  dialogTitle:{
    fontSize: fontSizes.large,
    fontWeight: 'bold',
    marginBottom: spacing.small,
  },
  dialogFooter: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }
});
