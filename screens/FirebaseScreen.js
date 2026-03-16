import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { db } from '../firebaseConfig';
import { collection, addDoc, onSnapshot, serverTimestamp, query, orderBy } from "firebase/firestore";

export default function FirebaseScreen() {
  const [title, setTitle] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "tasks"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const taskList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTasks(taskList);
    });
    return () => unsubscribe();
  }, []);

  const saveToFirebase = async () => {
    if (!title) return;
    await addDoc(collection(db, "tasks"), {
      title: title,
      createdAt: serverTimestamp()
    });
    setTitle('');
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Нове завдання" value={title} onChangeText={setTitle} />
      <Button title="Зберегти" onPress={saveToFirebase} />
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15, borderRadius: 5 },
  item: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#eee', marginTop: 10 },
  title: { fontWeight: 'bold', fontSize: 16 }
});