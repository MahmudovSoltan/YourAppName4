import React from 'react';
import { View, Text, StyleSheet, TextInput, Switch } from 'react-native'

import CustomSwitch from '../../ui/switch/CustomSwitch';
import { useGlobalContext } from '../../Provider/GlobalProvider';
import Button from '../../ui/button';
import { useState } from 'react';
const initialState = {
  name: '',
  bio: '',
}
const AuthForm = () => {
  const { isDarkMode, toggleDarkMode, addProduct } = useGlobalContext()
  const [error, setError] = useState({
    name: false,
    bio: false,
  });
  const [data, setData] = useState(initialState)


  const handleSubmit = () => {
    const errors = {
      name: data.name.trim() === "",
      bio: data.bio.trim() === "",
    };

    setError(errors);

    // Bütün errorlar yoxlanıldıqdan sonra qərar veririk
    if (!errors.name && !errors.bio) {
      addProduct(data);
      setData(initialState);
      setError({ name: false, bio: false });  // Errorları sıfırla
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: isDarkMode ? '#fff' : '#000' }]}>
        Name
      </Text>
      <TextInput
        style={[styles.input, error.name && styles.errorInput,{ color: isDarkMode ? '#fff' : '#000' }]}
        value={data.name}
        onChangeText={(text) => setData({ ...data, name: text })}
    

      />
      <Text style={[styles.label, { color: isDarkMode ? '#fff' : '#000' }]}>
        Bio
      </Text>
      <TextInput
        style={[styles.input, isDarkMode ? { color: '#fff' } : { color: '#000' },error.bio && styles.errorInput,]}
        value={data.bio}
        onChangeText={(text) => setData({ ...data, bio: text })}
        placeholderTextColor={isDarkMode ? '#fff' : '#555'}
      />

      <View style={styles.darckMode}>
        <Text style={{ fontSize: 16, color:isDarkMode ? "#fff":"#000", fontWeight: 'bold' }}>
          Dark Mode
        </Text>
        {/* <CustomSwitch
          initialValue={isDarkMode}
          onToggle={toggleDarkMode}
        /> */}
        < Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
        />

      </View>
      <Button
        title='Submit'
        style={{
          backgroundColor: isDarkMode ? '#333' : '#fff',
          borderRadius: 8,
          marginTop: 16,
        }}
        styleText={{ color: isDarkMode ? '#fff' : '#000' }}
        onPress={handleSubmit}
      />
    </View>
  )
}

export default AuthForm

const styles = StyleSheet.create({
  container: {
    padding: 16,

  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 8,
    padding: 15,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    // padding: 10,
    // marginTop: 16,
    fontSize: 16,
    color: '#333',
  },
  darckMode: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    padding: 10,
  },
  errorInput: {
    borderColor: 'red',
  },
});
