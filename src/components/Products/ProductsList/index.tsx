import React, { useCallback } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { useGlobalContext } from '../../../Provider/GlobalProvider';
import ProductForm from '../ProductForm';

type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
};

const products: Product[] = [
  { id: '1', name: 'Apple iPhone 14', price: '$999', image: 'https://via.placeholder.com/150' },
  { id: '2', name: 'Samsung Galaxy S23', price: '$899', image: 'https://via.placeholder.com/150' },
  { id: '3', name: 'Google Pixel 8', price: '$799', image: 'https://via.placeholder.com/150' },
  { id: '4', name: 'OnePlus 12', price: '$699', image: 'https://via.placeholder.com/150' }
];

const ProductList = () => {
  const { product } = useGlobalContext()
  const renderItem = useCallback(({ item }: { item: Product }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  ), [])
  console.log(product);

  return (
    <FlatList
      data={product}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
      // horizontal
      // numColumns={2}
      ListFooterComponent={<ProductForm />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f9f9f9',
    gap: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    fontSize: 16,
    color: '#777',
    marginTop: 4,
  },
});

export default ProductList;
