import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Card, Icon } from '@rneui/themed';
import { shadow, txt } from '../../utils/index'
import { styles } from './styles'

interface ICardItemProps {
  icon: string;
  type: string;
  label: string;
  size?: number;
  onPress?: () => void;
}


const CardItem = (props: ICardItemProps) => {
  const { icon, type, label, size, onPress } = props;

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={onPress}>
      <Card containerStyle={[styles.cardContainer, shadow.boxShadowSmall]}>
        <Icon color={txt.textPrimary10} type={type} size={size || 45} name={icon} />
        <Text style={styles.txtItem}>{label}</Text>
      </Card>
    </TouchableOpacity>
  )
}

export default CardItem;