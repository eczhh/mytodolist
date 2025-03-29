import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  // Hardcoded list of to-do items
  const todos = ['Buy milk', 'Buy bread', 'Buy eggs'];

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>My Todo List</Text>

      {/* Separation Line */}
      <View style={styles.separator} />

      {/* Todo List */}
      <View style={styles.todoList}>
        {todos.map((todo, index) => (
          <View key={index} style={styles.todoItemContainer}>
            <Text style={styles.todoItem}>{todo}</Text>
          </View>
        ))}
      </View>

      {/* Add New Todo Button */}
      <TouchableOpacity style={styles.addButton} onPress={() => {}}>
        <Text style={styles.addButtonText}>Add New Todo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 40,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#000000', // Black line
    marginBottom: 20,
  },
  todoList: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  todoItemContainer: {
    backgroundColor: '#d0e8f2',
    borderRadius: 5,
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  todoItem: {
    fontSize: 18,
    color: '#000000',
  },
  addButton: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default App;
