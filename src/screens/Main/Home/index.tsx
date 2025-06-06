import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import React, { useEffect, useState } from 'react';
import Button from '../../../ui/button';
import localStore from '../../../store/localStore';
import { useAuthtore } from '../../../store/auth.store';
import { useShallow } from 'zustand/react/shallow';
import { FlashList } from '@shopify/flash-list';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomePage = () => {
  const [likedIds, setLikedIds] = useState<number[]>([]);
  
  const removeToken = async () => {
    await localStore.removeItem('access_token');
  };

  const { getAllMoviesFunc, movies } = useAuthtore(
    useShallow((state) => ({
      getAllMoviesFunc: state.actions.getAllMoviesFunc,
      movies: state.movies,
    }))
  );

  useEffect(() => {
    getAllMoviesFunc?.();
  }, []);

  const handleWatch = (url: string) => {
    Linking.openURL(url);
  };

  const toggleFavorite = (id: number) => {
    setLikedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const renderItem = ({ item }: any) => {
    const isLiked = likedIds.includes(item.id);

    return (
      <View style={styles.card}>
        <Image source={{ uri: item.cover_url }} style={styles.image} />
        <View style={styles.info}>
          <View style={styles.headerRow}>
            <Text style={styles.title}>{item.title}</Text>
            <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
              <Ionicons
                name={isLiked ? 'heart' : 'heart-outline'}
                size={24}
                color={isLiked ? 'red' : '#444'}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.category}>Janr: {item.category?.name}</Text>
          <Text style={styles.imdb}>IMDb: {item.imdb}</Text>
          <TouchableOpacity style={styles.button} onPress={() => handleWatch(item.watch_url)}>
            <Text style={styles.buttonText}>İzləmək</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Button title='Log out' style={styles.logoutButton} onPress={removeToken} />
      <Text style={styles.header}>Filmlər</Text>
      <FlashList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        estimatedItemSize={200}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
  },
  logoutButton: {
    padding: 10,
    backgroundColor: '#2196F3',
    marginVertical: 20,
    alignSelf: 'flex-end',
    borderRadius: 8,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  card: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    width: 120,
    height: 180,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  info: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    paddingRight: 8,
  },
  category: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  imdb: {
    fontSize: 14,
    color: '#333',
    marginTop: 4,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
