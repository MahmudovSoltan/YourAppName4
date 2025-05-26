import React, { useState } from 'react';
import { Modal, View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface AddTodoModalProps {
    visible: boolean;
    onClose: () => void;
    onAddTodo: (text: string) => void;
    }
const AddTodoModal = ({ visible, onClose, onAddTodo }:AddTodoModalProps) => {
  const [todoText, setTodoText] = useState('');

  const handleAdd = () => {
    if (todoText.trim()) {
      onAddTodo(todoText.trim());
      setTodoText('');
      onClose();
    }
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Yeni Todo əlavə et</Text>
          <TextInput
            style={styles.input}
            placeholder="Todo yazın"
            value={todoText}
            onChangeText={setTodoText}
          />
          <View style={styles.buttons}>
            <Button title="Bağla" onPress={() => {
              setTodoText('');
              onClose();
            }} />
            <Button title="Əlavə et" onPress={handleAdd} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '85%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    marginBottom: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderColor: '#888',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 20,
    color: '#000',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default AddTodoModal;
