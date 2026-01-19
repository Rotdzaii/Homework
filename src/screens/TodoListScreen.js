'use client';

import { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const TodoListScreen = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      setTodos(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching todos:', error);
      setLoading(false);
    }
  };

  const renderTodoCard = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardText}>User ID: {item.userId}</Text>
      <Text style={styles.cardText}>Id: {item.id}</Text>
      <Text style={styles.cardText}>Title: {item.title}</Text>
      <Text style={styles.cardText}>Completed: {item.completed ? 'Yes' : 'No'}</Text>
    </View>
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.centerContainer}>
          <ActivityIndicator size="large" color="#e5b37d" />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={todos}
        renderItem={renderTodoCard}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContentContainer}
        scrollEnabled={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContentContainer: {
    padding: 15,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#e5b37d',
    borderWidth: 1.5,
    borderColor: '#000000',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
  },
  cardText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#000000',
    marginVertical: 5,
    fontWeight: '500',
  },
});

export default TodoListScreen;
