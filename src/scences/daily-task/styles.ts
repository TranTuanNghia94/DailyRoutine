import {StyleSheet} from 'react-native';
import {fontSizes, spacing, bg} from '../../utils/index';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.medium,
    backgroundColor: bg.bgPrimary0,
  },
  header: {
    marginBottom: spacing.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    fontSize: fontSizes.large,
    color: bg.bgPrimary10,
  },
  today: {
    fontSize: fontSizes.xxxlarge,
    fontWeight: 'bold',
    color: bg.bgBlack,
  },
  addTaskButton: {
    marginVertical: spacing.small,
  },
  addTaskText: {
    color: bg.bgWhite,
    fontSize: fontSizes.large,
    fontWeight: 'bold',
  },
  scheduleContainer: {
    flex: 1,
    marginTop: spacing.medium,
    padding: spacing.small,
  },
  scheduleContent: {
    backgroundColor: bg.bgWhite,
    borderRadius: spacing.small,
    padding: spacing.small,
    marginBottom: spacing.medium,
  },
  subjectText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  statusContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.tiny,
  },
  statusText: {
    marginHorizontal: spacing.tiny,
    fontSize: fontSizes.medium,
    fontWeight: 'bold',
  },
  textOrange: {
    color: bg.bgOrange,
  },
  textGreen: {
    color: bg.bgGreen,
  },
  textRed: {
    color: bg.bgRed,
  },
  textGray: {
    color: bg.bgGray,
  },
});
