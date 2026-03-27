import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function Labs() {
  const router = useRouter();
  const [agenda] = useState([
    { dia: 'Segunda', item: 'Edge Computing' },
    { dia: 'Terça', item: 'Data Science' }
  ]);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.back}>← Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Laboratórios</Text>
      <Text style={styles.subtitle}>Consulte disponibilidade</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Laboratório Maker</Text>
        <Text style={styles.status}>Indisponível</Text>
      </View>

      {agenda.length === 0 ? (
        <Text style={styles.empty}>Sem agendamentos</Text>
      ) : (
        agenda.map((a, i) => (
          <View key={i} style={styles.card}>
            <Text style={styles.cardTitle}>{a.dia}</Text>
            <Text style={styles.text}>{a.item}</Text>
          </View>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 20 },
  back: { color: '#ff0055' },
  title: { color: '#ff0055', fontSize: 28, fontWeight: 'bold' },
  subtitle: { color: '#888', marginBottom: 20 },
  card: {
    backgroundColor: '#111',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  },
  cardTitle: { color: '#fff' },
  text: { color: '#aaa' },
  status: { color: '#f00' },
  empty: { color: '#888', textAlign: 'center' }
});