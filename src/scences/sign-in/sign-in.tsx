import { Image, KeyboardAvoidingView, Platform, View } from 'react-native'
import React, { Component, useRef, useState } from 'react'
import { Button, Icon, Input, InputProps } from '@rneui/themed';
import { container } from '../../utils/styles'
import { styles } from './styles'
import { emailValidator } from '../../helper/validate';
import { ITEM_KEYS, setItem } from '../../helper/secure-storage';

const imgWelcome = require('../../assets/welcome.png');

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState({
    email: '',
    password: ''
  })

  const handleChange = (id: string, data: string) => {
    setFormData({ ...formData, [id]: data })
  }

  const hanldeBlur = (id: string) => {
    const newError = { ...error };

    if (id === 'password') {
      newError.password = formData.password.length < 6 ? 'Password must be at least 6 characters' : '';
    } else {
      newError.email = emailValidator(formData.email) ? '' : 'Email is not valid';
    }

    setError(newError);
  }

  const handleSubmit = async () => {
    if (error.email || error.password) {
      return;
    }

    await setItem(ITEM_KEYS.token, 'abcxyz')
  }

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
          }} errorMessage={error?.email || ''} onChangeText={e => handleChange('email', e)} />

          <Input placeholder="Password" id="password" leftIconContainerStyle={styles.leftIconInput} secureTextEntry maxLength={100} leftIcon={{
            type: 'antdesign',
            name: 'lock',
          }}
            errorMessage={error?.password || ''} onChangeText={e => handleChange('password', e)}
            onBlur={() => hanldeBlur('password')}
            rightIcon={<Icon name={'eye'} type='feather' />}
          />
        </View>

        <View style={styles.fullWidth}>
          <Button disabled={!formData.email || !formData.password} onPress={handleSubmit} buttonStyle={[styles.btn]} titleStyle={styles.txtBtn} title="Sign In" />
        </View>
      </View>
    </KeyboardAvoidingView>

  )

}

export default SignIn