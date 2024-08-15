import {StyleSheet} from 'react-native';
import {spacing, bg, fontSizes} from '../../utils/index';

export const styles = StyleSheet.create({
  addTaskButton: {
    backgroundColor: bg.bgPrimary10,
    padding: spacing.small,
    borderRadius: spacing.small,
    alignItems: 'center',
  },
  addTaskText: {
    color: bg.bgWhite,
    fontSize: fontSizes.large,
    fontWeight: 'bold',
  },
  btnCreate: {
    borderRadius: spacing.small,
    backgroundColor: bg.bgPrimary10,
  },
  overlayContainer: {
    height: '50%',
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    padding: spacing.medium,
    borderRadius: spacing.small,
    backgroundColor: bg.bgPrimary0,
  },
  inputTitle: {
    borderWidth: 1,
    borderColor: bg.bgPrimary5,
    borderRadius: spacing.small,
    padding: spacing.small,
    marginTop: spacing.small,
  },
  levelChipContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.small,
  },
  levelOutlineBtn: {
    borderRadius: spacing.small,
    borderColor: bg.bgPrimary10,
  },
  textOutlineBtn: {
    color: bg.bgPrimary10,
    fontSize: fontSizes.large,
  },
  levelBtn: {
    borderRadius: spacing.small,
    backgroundColor: bg.bgPrimary10,
  },
  textBtn: {
    color: bg.bgWhite,
    fontSize: fontSizes.large,
  },
  spacingVertical: {
    marginVertical: spacing.medium,
  },
});
