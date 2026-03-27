import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function Softwares() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [lista, setLista] = useState([
    { nome: 'Android Studio', status: 'Pendente' },
    { nome: 'VS Code', status: 'Concluído' }
  ]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.back}>← Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Instalação de Software</Text>
      <Text style={styles.subtitle}>
        Solicite instalação de softwares
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setLoading(true);
          setTimeout(() => setLoading(false), 2000);
        }}>
        <Text style={styles.buttonText}>
          {loading ? 'Enviando...' : '+ Nova Solicitação'}
        </Text>
      </TouchableOpacity>

      {lista.length === 0 ? (
        <Text style={styles.empty}>Nenhuma solicitação encontrada</Text>
      ) : (
        lista.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardTitle}>{item.nome}</Text>
            <Text style={styles.status}>{item.status}</Text>
          </View>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 20 },
  back: { color: '#ff0055', marginBottom: 10 },
  title: { color: '#ff0055', fontSize: 28, fontWeight: 'bold' },
  subtitle: { color: '#888', marginBottom: 20 },
  button: {
    backgroundColor: '#ff0055',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20
  },
  buttonText: { color: '#fff', textAlign: 'center' },
  card: {
    backgroundColor: '#111',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  },
  cardTitle: { color: '#fff' },
  status: { color: '#aaa' },
  empty: { color: '#888', textAlign: 'center', marginTop: 20 }
});