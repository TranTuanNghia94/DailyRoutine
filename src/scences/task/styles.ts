import {StyleSheet} from 'react-native';
import {spacing, bg, fontSizes} from '../../utils/index';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.medium,
    backgroundColor: bg.bgPrimary0,
  },
  tabHeader: {
    borderBottomWidth: 2,
    borderBottomColor: bg.bgPrimary10,
  },
  tabView: {
    width: '100%',
  },
  titleText:{
    fontSize: fontSizes.large,
    color: bg.bgPrimary10,
    fontWeight: 'bold',
  },
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
});
