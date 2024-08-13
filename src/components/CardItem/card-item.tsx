import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Card, Icon } from '@rneui/themed';
import {shadow} from '../../utils/styles'
import { styles } from './styles'

interface ICardItemProps {
    icon: string;
    type: string;
    label: string;
    size?: number;
}


const CardItem = (props: ICardItemProps) => {
    const { icon, type, label, size} = props;

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <Card containerStyle={[styles.cardContainer, shadow.boxShadowSmall]}>
        <Icon type={type} size={size || 45} name={icon} />
        <Text style={styles.txtItem}>{label}</Text>
      </Card>
    </TouchableOpacity>
  )
}

export default CardItem;