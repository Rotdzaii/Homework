import { StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen({ route }) {
  const { message } = route.params || {};

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.avatarCircle}>
          <Text style={styles.avatarText}>👤</Text>
        </View>
        <Text style={styles.profileName}>User Profile</Text>
        <Text style={styles.profileEmail}>user@example.com</Text>
      </View>

      {message && (
        <View style={styles.notificationBox}>
          <Text style={styles.notificationIcon}>✓</Text>
          <Text style={styles.notificationText}>{message}</Text>
        </View>
      )}

      <View style={styles.statusArea}>
        <Text style={styles.sectionTitle}>Status</Text>
        <View style={styles.statusCard}>
          <Text style={styles.statusLabel}>Account Status</Text>
          <Text style={styles.statusValue}>Active</Text>
        </View>
        <View style={styles.statusCard}>
          <Text style={styles.statusLabel}>Member Since</Text>
          <Text style={styles.statusValue}>Today</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA', paddingHorizontal: 24, paddingTop: 40 },
  profileHeader: { alignItems: 'center', marginBottom: 40 },
  avatarCircle: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#E8F0FF', justifyContent: 'center', alignItems: 'center', marginBottom: 16 },
  avatarText: { fontSize: 36 },
  profileName: { fontSize: 24, fontWeight: '700', color: '#1A1A1A', marginBottom: 4 },
  profileEmail: { fontSize: 14, color: '#666666' },
  notificationBox: { backgroundColor: '#E8F5E9', borderRadius: 8, paddingHorizontal: 16, paddingVertical: 14, marginBottom: 32, flexDirection: 'row', alignItems: 'center', gap: 12, borderLeftWidth: 4, borderLeftColor: '#4CAF50' },
  notificationIcon: { fontSize: 18, color: '#4CAF50', fontWeight: '700' },
  notificationText: { fontSize: 14, color: '#2E7D32', fontWeight: '500', flex: 1 },
  statusArea: { gap: 12 },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: '#1A1A1A', marginBottom: 8 },
  statusCard: { backgroundColor: '#FFFFFF', borderRadius: 8, paddingHorizontal: 16, paddingVertical: 14, borderWidth: 1, borderColor: '#E0E0E0' },
  statusLabel: { fontSize: 12, color: '#999999', fontWeight: '600', marginBottom: 6 },
  statusValue: { fontSize: 16, fontWeight: '700', color: '#4A90E2' },
});