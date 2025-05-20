import React, { useCallback } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { useGlobalContext } from '../../../Provider/GlobalProvider';
import AuthForm from '../../AuthForm';


const ProfileCard = () => {
  const { isDarkMode,product } = useGlobalContext();
  const renderItem = useCallback(({ item }) => (
    <View style={[styles.card, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
      <Image
        source={{ uri: 'https://img.freepik.com/premium-vector/avatar-prof…ss-concept_157943-38764.jpg?semt=ais_hybrid&w=740' }}
        style={styles.profileImage}
      />
      <Text style={[styles.name, { color: isDarkMode ? '#fff' : '#333' }]}>
        {item.name}
      </Text>
      <Text style={[styles.bio, { color: isDarkMode ? '#ccc' : '#666' }]}>
        {item.bio}
      </Text>
    </View>
  ), [isDarkMode]);
  return (
    <FlatList
    data={product}
    keyExtractor={(item, index) => index.toString()}
    renderItem={renderItem}
    // ListHeaderComponent={<AuthForm/>}
    ListFooterComponent={<AuthForm />}
    />

  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    padding: 20,
    marginVertical: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
  },
});

export default ProfileCard;
