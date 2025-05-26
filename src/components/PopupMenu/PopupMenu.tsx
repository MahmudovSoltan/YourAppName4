import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
 interface PopupMenuProps {
  visible: boolean;
    position: { x: number; y: number } | null;
    onClose: () => void;
    onEdit: () => void;
    onDelete: () => void;
}

const PopupMenu = ({ visible, position, onClose, onEdit, onDelete }: PopupMenuProps) => {
  if (!visible || !position) return null;

  return (
    <Modal transparent animationType="fade" visible={visible} onRequestClose={onClose}>
      <TouchableOpacity style={styles.overlay} onPress={onClose}>
        <View style={[styles.menu, { top: position.y, left: position.x }]}>
          <TouchableOpacity onPress={onEdit}>
            <Text style={styles.menuItem}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onDelete}>
            <Text style={styles.menuItem}>Delete</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default PopupMenu;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
  },
  menu: {
    position: 'absolute',
    backgroundColor: 'white',
    elevation: 5, 
    
    borderRadius: 6,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
  },
  menuItem: {
    paddingVertical: 8,
    fontSize: 16,
  },
});
