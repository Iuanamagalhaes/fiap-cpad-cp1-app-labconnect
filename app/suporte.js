import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function Suporte() {
  const router = useRouter();
  const [tipo, setTipo] = useState(null);
  const [enviado, setEnviado] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.back}>← Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Suporte Rápido</Text>
      <Text style={styles.subtitle}>Ajuda imediata</Text>

      <View style={styles.grid}>
        {['Computador', 'Projetor', 'Rede', 'Outro'].map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.option,
              tipo === item && { backgroundColor: '#ff0055' }
            ]}
            onPress={() => setTipo(item)}
          >
            <Text style={{ color: '#fff' }}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setEnviado(true)}>
        <Text style={styles.buttonText}>Enviar solicitação</Text>
      </TouchableOpacity>
      {enviado && <Text style={styles.success}>Solicitação enviada!</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 20 },
  back: { color: '#ff0055' },
  title: { color: '#ff0055', fontSize: 28, fontWeight: 'bold' },
  subtitle: { color: '#888', marginBottom: 20 },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10
  },
  option: {
    backgroundColor: '#111',
    padding: 15,
    borderRadius: 10,
    width: '48%',
    marginBottom: 10,
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#ff0055',
    padding: 15,
    borderRadius: 10
  },
  buttonText: { color: '#fff', textAlign: 'center' },
  success: { color: '#0f0', marginTop: 10 }
});