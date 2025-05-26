import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useCallback, useState } from 'react'
import { FlashList } from '@shopify/flash-list';
import { Swipeable } from 'react-native-gesture-handler';
import AddTodoModal from '../modals/AddTodoModal/AddTodoModal';
import localStore from '../../store/localStore';
interface toDos {
    id: number;
    title: string;
    completed: boolean;
}
interface ItemProps {
    item: toDos;
}




const Todos = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [todos, setTodos] = useState(localStore.getItem('todos') || []);

  const addTodo = (text: string) => {
    const newTodo = [...todos, { id: Date.now(), title: text, completed: false }];
    setTodos(newTodo);
    localStore.setItem('todos', newTodo);
  };

  const handleDelete = (id: number) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    localStore.setItem('todos', updatedTodos);
    setTodos(updatedTodos);
    console.log('Deleted todo with id:', id, 'Updated todos:', updatedTodos);
    
  };

  const renederItem = useCallback(({ item }: ItemProps) => (
      <Swipeable renderRightActions={() => (
          <TouchableOpacity
              onPress={() => handleDelete(item.id)}
              style={{ backgroundColor: 'red', width: 100, height:50,justifyContent: 'center', alignItems: 'center' }}
          >
              <Text style={{ color: 'white' }}>Delete</Text>
          </TouchableOpacity>
      )}>
            <View style={styles.itemContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.completed}>{item.completed ? 'Completed' : 'Not Completed'}</Text>
            </View>

        </Swipeable>
    ), [])
    return (
        <View style={styles.container}>
            <View style={styles.itemContainer2}>
            <Text style={styles.title}>Todos </Text>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text style={{ color: 'blue',fontWeight:"600" }}>Yeni Todo əlavə et</Text>
            </TouchableOpacity>
            </View>
            <FlashList
                data={todos}
                estimatedItemSize={50}
                renderItem={renederItem}
                ListEmptyComponent={() => <Text style={styles.title}>No todos</Text>}
            />
            <AddTodoModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onAddTodo={addTodo}
            />
        </View>
    )
}


export default Todos

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,

    },
    itemContainer: {
        // padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
       marginBottom:20,
       paddingBottom:10,
    
        
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    completed: {
        fontSize: 14,
        color: 'gray',
    },
    itemContainer2: { flexDirection: 'row', justifyContent: 'space-between',marginBottom:10 },
})