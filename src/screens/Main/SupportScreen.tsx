import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SupportScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Support</Text>
      <Text style={styles.text}>Need help? Contact us or read our FAQ.</Text>
    </View>
  );
};

export default SupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#F0F8FF',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1A1A1A',
  },
  text: {
    fontSize: 16,
    color: '#444',
  },
});
