import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useAuthtore } from '../../store/auth.store';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigation<any>()

  const { authSignUp } = useAuthtore((state) => state.actions)


  const handleSignUp = async () => {
    const userData = {
      full_name: fullName,
      email: email,
      password: password,
    };

    const response = await authSignUp(userData)
    console.log(response, 'response');
    if (response.result) {
      navigate.navigate('SignIn')
    }
    // Burada əslində API çağırışı ediləcək, indi sadəcə göstəririk:
    setFullName('')
    setEmail('')
    setPassword('')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Qeydiyyat</Text>

      <TextInput
        style={styles.input}
        placeholder="Ad Soyad"
        value={fullName}
        onChangeText={setFullName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Şifrə"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Qeydiyyatdan keç" onPress={handleSignUp} />
      <View style={{marginTop: 10}}>
        <Button title="Qeydiyyatdan keçmisiz" onPress={()=>navigate.navigate('SignIn')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
});

export default SignUpScreen;
