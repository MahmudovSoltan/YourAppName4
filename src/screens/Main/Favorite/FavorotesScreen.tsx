import { View, Text, StyleSheet, TouchableOpacity, Image, Linking } from 'react-native';
import React, { useEffect } from 'react';
import { useAuthtore } from '../../../store/auth.store';
import { useShallow } from 'zustand/react/shallow';
import { FlashList } from '@shopify/flash-list';

const FavorotesScreen = () => {
  const { getFavoritesMoviesFunc, favoritesMovies,profile, } = useAuthtore(
    useShallow((state) => ({
      getFavoritesMoviesFunc: state.actions.getFavoritesMoviesFunc,
      favoritesMovies: state.favoritesMovies,
      profile:state.profileInfo,
      authSignIn:state.actions.authSignIn
    }))
  );

  useEffect(() => {
    getFavoritesMoviesFunc();

  }, []);

  const handleWatch = (url: string) => {
    Linking.openURL(url);
  };
  console.log(profile,"profile");
  
  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Image source={{ uri: item.cover_url }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>Janr: {item.category?.name}</Text>
        <Text style={styles.imdb}>IMDb: {item.imdb}</Text>
        <TouchableOpacity style={styles.button} onPress={() => handleWatch(item.watch_url)}>
          <Text style={styles.buttonText}>İzləmək</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}> Sevimli Filmlər</Text>
      <FlashList
        data={favoritesMovies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        estimatedItemSize={200}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </View>
  );
};

export default FavorotesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingTop: 12,
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
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
