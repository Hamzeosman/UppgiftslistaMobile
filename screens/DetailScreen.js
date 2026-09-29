import { StyleSheet, Text, View } from "react-native";

const API_BASE = "http://192.168.1.82:5277";

export default function DetailScreen({ route }) {
  const { todo } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Titel</Text>
      <Text style={styles.value}>{todo.title}</Text>

      <Text style={styles.label}>Status</Text>
      <Text style={styles.value}>{todo.done ? "Klar ✅" : "Ej klar ❌"}</Text>

      <Text style={styles.label}>Uppgifts-ID</Text>
      <Text style={styles.value}>{todo.id}</Text>

      <Text style={styles.label}>Bifogad fil</Text>
      <Text style={styles.value}>
        {todo.fileName ? `${API_BASE}/uploads/${todo.fileName}` : "Ingen fil uppladdad"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  label: { fontSize: 13, color: "#888", marginTop: 16 },
  value: { fontSize: 18, marginTop: 4 },
});