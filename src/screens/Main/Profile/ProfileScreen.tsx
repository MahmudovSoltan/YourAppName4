// screens/Main/Profile/ProfileScreen.jsx
import React from 'react';
import { View, Text, Image,  StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuthtore } from '../../../store/auth.store';
import { useShallow } from 'zustand/react/shallow';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const { profileData } = useAuthtore(
    useShallow((state) => ({
      profileData: state.profileData,
    }))
  );
console.log(profileData?.img_url,'image'); // görək URL gəlir ya yox
// console.log(Image.resolveAssetSource(require('../../../assets/images/default-avatar.png')));
  return (
    <View style={styles.container}>
      {/* <Image
        source={
          profileData?.img_url
            ? { uri: profileData.img_url }
            : require('../../../assets/images/default-avatar.png')
        }
        style={styles.avatar}
      /> */}
      <Image
         
        source={
          profileData?.img_url
            ? { uri: profileData.img_url }
            : require('../../../assets/images/default-avatar.jpg')
        }
        style={styles.avatar}
      />
      <Text style={styles.name}>{profileData?.full_name}</Text>
      <Text style={styles.email}>{profileData?.email}</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('EditProfile')}
        style={styles.editButton}
      >
        <Text style={styles.editText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    backgroundColor: '#ddd',
  },
  name: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  editButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: '#007AFF',
    borderRadius: 8,
  },
  editText: {
    color: '#fff',
    fontSize: 16,
  },
});
