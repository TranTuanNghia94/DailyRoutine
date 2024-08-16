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
  footerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.medium,
  },
  listItemContainer: {
    backgroundColor: bg.bgPrimary5,
  },
  itemContent: {
    width: '100%',
    paddingVertical: spacing.medium,
  },
  textModify: {
    color: bg.bgPrimary10,
    fontSize: fontSizes.xlarge,
    textAlign: 'center',
  },
  textDelete: {
    color: bg.bgRed,
    fontSize: fontSizes.xlarge,
    textAlign: 'center',
  },
  divider:{
    width: '100%',
    backgroundColor: bg.bgWhite
  },
  chipContainer:{
    backgroundColor: bg.bgPrimary10,
  }
});
