import {StyleSheet} from 'react-native';
import {spacing} from '../../utils/size';
import {bg} from '../../utils/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginTop: spacing.small,
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.large,
    backgroundColor: bg.bgPrimary5,
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});
