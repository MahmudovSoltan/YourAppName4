import React, { useCallback, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  UIManager,
  findNodeHandle,
  TouchableOpacity,
} from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { useGlobalContext } from '../Provider/GlobalProvider';
import FeedBackForm from '../components/Products/feedBackList/FeedBackForm';
import PopupMenu from '../components/PopupMenu/PopupMenu';

const FeedBackList = () => {
  const { product } = useGlobalContext();

  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  const itemRefs = useRef({});

  const openMenu = (item, id) => {
    const ref = itemRefs.current[id];
    if (!ref) return;

    UIManager.measure(
      findNodeHandle(ref),
      (x, y, width, height, pageX, pageY) => {
        setMenuPosition({ x: pageX, y: pageY + height });
        setSelectedItem(item);
        setMenuVisible(true);
      }
    );
  };

  const handleEdit = () => {
    console.log('Edit', selectedItem);
    setMenuVisible(false);
  };

  const handleDelete = () => {
    console.log('Delete', selectedItem);
    setMenuVisible(false);
  };

  const renderItem = useCallback(({ item }) => (
    <View style={styles.itemContainer}>
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.feedback}>{item.feedback}</Text>
      </View>
      <TouchableOpacity
        ref={(ref) => (itemRefs.current[item.id] = ref)}
        onPress={() => openMenu(item, item.id)}
        style={styles.menuButton}
      >
        <Text style={styles.menuButtonText}>⋮</Text>
      </TouchableOpacity>
    </View>
  ), []);

  return (
    <View style={styles.container}>
      {/* <FlashList
        data={product}
        renderItem={renderItem}
        estimatedItemSize={100}
        ListHeaderComponent={<FeedBackForm />}
        ListEmptyComponent={<Text style={styles.emptyItem}>No feedback yet.</Text>}
      /> */}

      {/* <PopupMenu
        visible={menuVisible}
        position={menuPosition}
        onClose={() => setMenuVisible(false)}
        onEdit={handleEdit}
        onDelete={handleDelete}
      /> */}
    </View>
  );
};

export default FeedBackList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  feedback: {
    fontSize: 14,
  },
  emptyItem: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  menuButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  menuButtonText: {
    fontSize: 18,
  },
});
