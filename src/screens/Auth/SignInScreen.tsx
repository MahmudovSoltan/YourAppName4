import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useAuthtore } from '../../store/auth.store';
import localStore from '../../store/localStore';
import { useNavigation } from '@react-navigation/native';
import { Screen } from 'react-native-screens';
const initalData = {
  email: '',
  password: '',
}
const LoginScreen = () => {
  const [data, setData] = useState(initalData);
  const { authSignIn } = useAuthtore((state) => state.actions)
  const handleInputChange = (key: 'email' | 'password', value: string) => {
    setData({ ...data, [key]: value });

  };

  const navigation = useNavigation<any>();
  
  // const handleSubmit = async () => {
  //   console.log(data);
  //   const response = await authSignIn(data)
  //   console.log(response,'response');

  //   setData(initalData)
  // }


  const handleSubmit = async () => {
  try {
    const response = await authSignIn(data);
    console.log(response, 'response');

    if (response?.result) {
      // uğurlu giriş — məsələn, navigation və ya toast mesajı
    //  navigation.navigate('TabStack',{
    //   Screen:'HomeStack'
    //  });
    } else {
      // uğursuz giriş üçün Alert və ya toast
    }

    
    setData(initalData);
  } catch (error) {
    console.error('Login error2:', error);
    Alert.alert('Xəta', 'Giriş zamanı problem yarandı');
  }
};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giriş</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={data.email}
        onChangeText={(value) => handleInputChange('email', value)}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Şifrə"
        value={data.password}
        onChangeText={(value) => handleInputChange('password', value)}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Daxil ol</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 24 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#4a90e2',
    padding: 14,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
