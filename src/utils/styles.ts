import {Platform, StyleSheet} from 'react-native';
import {bg} from './color';
import {spacing} from './size';

const shadow = StyleSheet.create({
  boxShadowSmall: {
    shadowColor: bg.bgBlack,
    shadowOffset: {
      width: 10,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    elevation: 10,
  },
});

const container = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  containerPadding: {
    padding: spacing.medium,
  },
});

export {shadow, container};
