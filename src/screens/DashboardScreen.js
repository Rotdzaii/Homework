import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DashboardScreen({ navigation }) {
  // Danh sách các bài tập - Sau này có Task 3, 4 chỉ cần thêm vào mảng này
  const tasks = [
    { id: 1, title: 'Task 1: Navigation Stack', route: 'Home', color: '#4A90E2' },
    { id: 2, title: 'Task 2: API Data List', route: 'TodoList', color: '#E5B37D' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Homework Dashboard</Text>
        <Text style={styles.headerSubtitle}>Chọn nhiệm vụ để kiểm tra</Text>
      </View>

      <View style={styles.menuGrid}>
        {tasks.map((task) => (
          <TouchableOpacity
            key={task.id}
            style={[styles.card, { borderLeftColor: task.color }]}
            onPress={() => navigation.navigate(task.route)}
          >
            <View style={styles.cardContent}>
              <Text style={styles.taskNumber}>Task {task.id}</Text>
              <Text style={styles.taskTitle}>{task.title}</Text>
            </View>
            <Text style={styles.arrow}>❯</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  header: { padding: 30, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#EEE' },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#1A1A1A' },
  headerSubtitle: { fontSize: 14, color: '#666', marginTop: 5 },
  menuGrid: { padding: 20, gap: 15 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderLeftWidth: 5,
    // Shadow cho iOS/Web
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Elevation cho Android
    elevation: 3,
  },
  cardContent: { flex: 1 },
  taskNumber: { fontSize: 12, fontWeight: 'bold', color: '#999', marginBottom: 4 },
  taskTitle: { fontSize: 16, fontWeight: '600', color: '#333' },
  arrow: { fontSize: 18, color: '#CCC', marginLeft: 10 }
});