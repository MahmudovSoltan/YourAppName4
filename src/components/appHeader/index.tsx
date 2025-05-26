import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
// import Ionicons from 'react-native-vector-icons/Ionicons';

interface AppHeaderProps {
  title: string;
  onBackPress?: () => void;
  onMenuPress?: () => void;
}

const AppHeader: React.FC<AppHeaderProps> = ({ title, onBackPress, onMenuPress }) => {
  return (
    <View style={styles.container}>
      {/* Geri düyməsi */}
      {onBackPress ? (
        <TouchableOpacity onPress={onBackPress} style={styles.iconButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
      ) : (
        <View style={styles.placeholder} />
      )}

      {/* Başlıq */}
      <Text style={styles.title}>{title}</Text>

      {/* Menu düyməsi */}
      {onMenuPress ? (
        <TouchableOpacity onPress={onMenuPress} style={styles.iconButton}>
          <Ionicons name="menu" size={24} color="#fff" />
        </TouchableOpacity>
      ) : (
        <View style={styles.placeholder} />
      )}
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#4a90e2', // mavi rəng
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  iconButton: {
    padding: 8,
  },
  placeholder: {
    width: 32,
  },
});
