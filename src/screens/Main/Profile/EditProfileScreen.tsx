import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const EditProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profili Redaktə Et</Text>
      <TextInput style={styles.input} placeholder="Yeni ad" />
      <TextInput style={styles.input} placeholder="Yeni email" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Yadda Saxla</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProfileScreen;


const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  label: { fontWeight: 'bold', marginTop: 16 },
  value: { fontSize: 16, marginTop: 4 },
  button: {
    marginTop: 24, backgroundColor: '#4a90e2', padding: 12, borderRadius: 8
  },
  buttonText: { color: 'white', textAlign: 'center' }
});
