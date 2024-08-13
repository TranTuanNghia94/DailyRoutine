

import { StyleSheet, Text, View } from 'react-native'
import React, { Component, ReactElement } from 'react'
import { container } from '../../utils/styles'
import PropTypes from 'prop-types';
import { styles } from './styles'
import { Constructor } from 'react-native/types/private/Utilities';

export interface IWrapperProps{
  child: React.ReactNode
}

declare const WrapperBase: Constructor<IWrapperProps> & typeof Component;

class ScreenWrapper extends WrapperBase {}


export default ScreenWrapper;