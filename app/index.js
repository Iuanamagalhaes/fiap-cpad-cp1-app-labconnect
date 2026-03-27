import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      
      <Text style={styles.titleSmall}>Bem-vindo ao</Text>
      <Text style={styles.title}>LABCONNECT</Text>
      <Text style={styles.subtitle}>
        Gerencie laboratórios, solicite software e reporte problemas.
      </Text>

      <TouchableOpacity style={styles.card} onPress={() => router.push('/laboratorios')}>
        <Text style={styles.cardTitle}>LABORATÓRIOS</Text>
        <Text style={styles.cardDesc}>Consulte horários e disponibilidade</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => router.push('/softwares')}>
        <Text style={styles.cardTitle}>SOFTWARES</Text>
        <Text style={styles.cardDesc}>Solicite instalação de softwares</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>PROBLEMAS</Text>
        <Text style={styles.cardDesc}>Reporte problemas técnicos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => router.push('/suporte')}>
        <Text style={styles.cardTitle}>SUPORTE</Text>
        <Text style={styles.cardDesc}>Ajuda imediata</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20
  },
  titleSmall: {
    color: '#aaa',
    fontSize: 18
  },
  title: {
    color: '#ff0055',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subtitle: {
    color: '#888',
    marginBottom: 20
  },
  card: {
    backgroundColor: '#111',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#ff0055'
  },
  cardTitle: {
    color: '#ff0055',
    fontSize: 18,
    fontWeight: 'bold'
  },
  cardDesc: {
    color: '#aaa'
  }
});