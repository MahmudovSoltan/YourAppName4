import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuthtore } from '../../../store/auth.store';
import { useShallow } from 'zustand/react/shallow';

const EditProfileScreen = () => {
  const navigation = useNavigation();

  const { profileData, profileEditFunc } = useAuthtore(
    useShallow((state) => ({
      profileData: state.profileData,
      profileEditFunc: state.actions.profileEditFunc,
    }))
  );

  const [name, setName] = useState(profileData?.full_name || '');
  const [email, setEmail] = useState(profileData?.email || '');
  const [imgUrl, setImgUrl] = useState(profileData?.img_url || '');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    imgUrl: false,
    password: false,
  });

  const handleSave = async () => {
    const newErrors = {
      name: name.trim() === '',
      email: email.trim() === '',
      imgUrl: imgUrl.trim() === '',
      password: password.trim() === '',
    };

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some((val) => val);
    if (hasError) {
      Alert.alert('Xəta', 'Zəhmət olmasa bütün xanaları doldurun.');
      return;
    }

    const updatedProfile = {
      full_name: name,
      email,
      img_url: imgUrl,
      password,
    };

    try {
      const response = await profileEditFunc(updatedProfile);
      if (response.result) {
        Alert.alert('Uğurla yadda saxlanıldı', 'Profil məlumatlarınız yeniləndi.');
        navigation.goBack();
      } else {
        Alert.alert('Xəta', 'Profil yenilənmədi.');
      }
    } catch (error) {
      console.log('Profile update error:', error);
      Alert.alert('Xəta', 'Serverə qoşulmaq mümkün olmadı.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Edit Profile</Text>

      <Image
        source={
          imgUrl
            ? { uri: imgUrl }
            : require('../../../assets/images/default-avatar.jpg')
        }
        style={styles.avatar}
      />

      <Text style={styles.label}>Image URL</Text>
      <TextInput
        value={imgUrl}
        onChangeText={(text) => {
          setImgUrl(text);
          setErrors((prev) => ({ ...prev, imgUrl: false }));
        }}
        style={[styles.input, errors.imgUrl && styles.errorInput]}
        placeholder="https://example.com/avatar.png"
      />

      <Text style={styles.label}>Full Name</Text>
      <TextInput
        value={name}
        onChangeText={(text) => {
          setName(text);
          setErrors((prev) => ({ ...prev, name: false }));
        }}
        style={[styles.input, errors.name && styles.errorInput]}
        placeholder="Adınızı daxil edin"
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          setErrors((prev) => ({ ...prev, email: false }));
        }}
        style={[styles.input, errors.email && styles.errorInput]}
        keyboardType="email-address"
        placeholder="E-poçt ünvanı"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        value={password}
        onChangeText={(text) => {
          setPassword(text);
          setErrors((prev) => ({ ...prev, password: false }));
        }}
        style={[styles.input, errors.password && styles.errorInput]}
        secureTextEntry
        placeholder="Yeni şifrə"
      />

      <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 20,
    backgroundColor: '#ccc',
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    color: '#333',
  },
  input: {
    height: 44,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  errorInput: {
    borderColor: 'red',
  },
  saveButton: {
    marginTop: 20,
    backgroundColor: '#28a745',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveText: {
    color: '#fff',
    fontSize: 16,
  },
});
