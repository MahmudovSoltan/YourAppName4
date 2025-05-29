import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProductDetailSheet from '../../components/sheets/ProductDetailSheet';
import Button from '../../ui/button';
import type { BottomSheetModal } from '@gorhom/bottom-sheet';

const SupportScreen = () => {
  const sheetRef = React.useRef<BottomSheetModal>(null);
  const handlePresentSheet = () => {
    sheetRef.current?.present();
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Support</Text>
      <Text style={styles.text}>Need help? Contact us or read our FAQ.</Text>
      <Button
        onPress={handlePresentSheet}
        title="Present Modal"
        style={styles.button}
        styleText={styles.text2}
      />

      <ProductDetailSheet sheetRef={sheetRef}>
        <Text>Awesome 🎉</Text>
        <Button
          onPress={() => sheetRef.current?.close()}
          title="Close Modal"
          style={styles.closeButton}
          styleText={styles.text2}
        />
      </ProductDetailSheet>
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
  button: {
    marginTop: 20,
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#FF5733',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  text2: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
