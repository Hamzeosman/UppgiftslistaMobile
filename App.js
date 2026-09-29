import { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from "react-native";

const API_URL = "http://192.168.1.82:5277/api/todo";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) throw new Error("Kunde inte hämta uppgifter");
        return response.json();
      })
      .then((data) => {
        setTodos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mina uppgifter</Text>

      {loading && <ActivityIndicator size="large" />}
      {error && <Text style={styles.error}>Fel: {error}</Text>}

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>
              {item.title} {item.done ? "✅" : "❌"}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 60, paddingHorizontal: 20, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  item: { padding: 12, borderBottomWidth: 1, borderBottomColor: "#eee" },
  itemText: { fontSize: 16 },
  error: { color: "red", marginBottom: 10 },
});