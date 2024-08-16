import {StyleSheet} from 'react-native';
import {spacing, bg, fontSizes} from '../../utils/index';


export const styles = StyleSheet.create({
  addTaskButton: {
    backgroundColor: bg.bgPrimary10,
    paddingHorizontal: spacing.small,
    paddingVertical: spacing.medium,
    borderRadius: spacing.small,
    alignItems: 'center',
  },
  addTaskText: {
    color: bg.bgWhite,
    fontSize: fontSizes.large,
    fontWeight: 'bold',
  },
  btnContainer:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: spacing.small,
  },
  btnCreate: {
    borderRadius: spacing.small,
    backgroundColor: bg.bgPrimary10,
    paddingHorizontal: spacing.medium,
  },
  btnClose: {
    borderRadius: spacing.small,
    backgroundColor: bg.bgGray,
    paddingHorizontal: spacing.medium,
  },
  overlayContainer: {
    height: 400,
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
  itemContent: {
    width: '100%',
    paddingVertical: spacing.medium,
  },
  textModify: {
    color: bg.bgPrimary10,
    fontSize: fontSizes.xlarge,
    textAlign: 'center',
  },
});
