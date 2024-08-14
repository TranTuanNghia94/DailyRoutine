import {StyleSheet} from 'react-native';
import {bg, spacing} from '../../utils/index';

export const styles = StyleSheet.create({
  tabContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: bg.bgPrimary5,
    paddingTop: spacing.small,
  },
  tabContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: spacing.medium,
    paddingHorizontal: spacing.medium,
  },
  tabIconContent: {
    backgroundColor: bg.bgPrimary10,
  },
  tabIcon: {
    paddingBottom: 40,
  },
});
