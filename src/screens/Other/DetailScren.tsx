import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DetailScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Detail Screen</Text>
      <Button title="Geri Qayıt" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 22, marginBottom: 20 }
});
