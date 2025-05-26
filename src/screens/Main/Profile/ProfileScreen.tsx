import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ProfileScreen = () => {
    const { navigate } = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Ad:</Text>
      <Text style={styles.value}>İstifadəçi Adı</Text>

      <Text style={styles.label}>Email:</Text>
      <Text style={styles.value}>user@example.com</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={() => navigate('EditProfile')}>Profili Redaktə Et</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { fontWeight: 'bold', marginTop: 16 },
  value: { fontSize: 16, marginTop: 4 },
  button: {
    marginTop: 24, backgroundColor: '#4a90e2', padding: 12, borderRadius: 8
  },
  buttonText: { color: 'white', textAlign: 'center' }
});
