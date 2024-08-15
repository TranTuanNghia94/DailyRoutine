import {StyleSheet} from 'react-native';
import {spacing, bg, fontSizes} from '../../utils/index';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.medium,
    backgroundColor: bg.bgPrimary0,
  },
  tabHeader: {
    backgroundColor: bg.bgPrimary0,
    borderBottomWidth: 1,
    borderBottomColor: bg.bgPrimary5,
  },
  tabView: {
    width: '100%',
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
