import { View, Text, StyleSheet } from 'react-native'
import React, { PropsWithChildren, useCallback, useRef } from 'react'
import Button from '../../../ui/button'
import { BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { BackDrop } from '../../BackDrop'

interface ProductDetailSheetProps {
  sheetRef?: React.RefObject<BottomSheetModal>;
  onChange?: (index: number) => void;

}
const ProductDetailSheet = ({ sheetRef, onChange, children }:
  PropsWithChildren<ProductDetailSheetProps>) => {



  const handleSheetChanges = useCallback((index: number) => {
    onChange?.(index);
  }, [onChange]);



  return (


    <BottomSheetModal
      ref={sheetRef}
      onChange={handleSheetChanges}
      snapPoints={['25%', '40%']}
      enableDynamicSizing={false}
      backdropComponent={BackDrop}

    >
      <BottomSheetScrollView style={styles.contentContainer}>
        {children}
      </BottomSheetScrollView>
    </BottomSheetModal>

  )
}

export default ProductDetailSheet

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    // alignItems: 'center',
  },
});