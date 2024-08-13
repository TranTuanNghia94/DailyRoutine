import { Image, KeyboardAvoidingView, Platform, View } from 'react-native'
import React, { Component } from 'react'
import { Button, Icon, Input, Text } from '@rneui/themed';
import { container } from '../../utils/styles'
import { styles } from './styles'

const imgWelcome = require('../../assets/welcome.png');

const SignIn = () => {

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}>
      <View style={[container.container, styles.contentCenter, container.containerPadding]}>
        <View style={[styles.imageContainer]}>
          <Image source={imgWelcome} style={styles.welcomeImage} />
        </View>

        <View style={styles.fullWidth}>
          <Input placeholder="Email" maxLength={150} id='email' leftIconContainerStyle={styles.leftIconInput} leftIcon={{
            type: 'antdesign',
            name: 'mail',
          }} />

          <Input placeholder="Password" id="password" leftIconContainerStyle={styles.leftIconInput} secureTextEntry maxLength={100} leftIcon={{
            type: 'antdesign',
            name: 'lock',
          }}
            rightIcon={<Icon name={'eye'} type='feather' />}
          />
        </View>

        <View style={styles.fullWidth}>
          <Button buttonStyle={[styles.btn]} titleStyle={styles.txtBtn} title="Sign In" />
        </View>
      </View>
    </KeyboardAvoidingView>

  )

}

export default SignIn