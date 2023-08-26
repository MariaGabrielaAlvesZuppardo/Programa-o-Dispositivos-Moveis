import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, StatusBar } from 'react-native';


const App = () => {
  const [task, setTask] = useState('');
  const [tasksList, setTasksList] = useState([]);

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasksList([...tasksList, { id: Date.now(), task }]);
      setTask('');
    }
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasksList.filter(item => item.id !== taskId);
    setTasksList(updatedTasks);
  };

  const taskCount = tasksList.length;

  const renderItem = ({ item }) => (
    <View style={styles.taskItem}>
      <Text style={styles.taskText}>{item.task}</Text>
      <Button
        title="Apagar"
        onPress={() => handleDeleteTask(item.id)}
        color="#6a5acd" 
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>App ToDoList</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma tarefa"
          value={task}
          onChangeText={text => setTask(text)}
        />
        <Button
          title="Adicionar"
          onPress={handleAddTask}
          color="#6a5acd"
        />
      </View>
      <FlatList
        data={tasksList}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <View style={styles.customStatusBar}>
        <Text style={styles.statusBarText}>Tarefas: {taskCount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fffafa',
  },
  customStatusBar: {
    backgroundColor: '#6a5acd',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  statusBarText: {
    fontSize: 18,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginRight: 10,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 14,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  taskText: {
    fontSize: 16,
  },
});

export default App;

