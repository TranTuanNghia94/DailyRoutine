import {StyleSheet} from 'react-native';
import {bg, spacing, fontSizes} from '../../utils/index';

export const styles = StyleSheet.create({
  daysContainer: {
    flexDirection: 'row',
  },
  dayItem: {
    alignItems: 'center',
    padding: spacing.small,
    borderRadius: 8,
    marginHorizontal: 2
  },
  selectedDay: {
    backgroundColor: bg.bgPrimary5,
  },
  dayText: {
    fontSize: 16,
    color: bg.bgPrimary10,
  },
  dayDate: {
    fontSize: fontSizes.large,
    fontWeight: 'bold',
    color: bg.bgPrimary10,
  },
});
