import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import Button from '../../shared/ui/button';

export default function DetalleComercioScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <SafeAreaView style={styles.contenedor}>
      {/* Botón Volver reutilizable */}
      <Button title="Volver" />

      <View style={styles.tarjetaFicha}>
        <Text style={styles.titulo}>Ficha del Comercio</Text>
        <Text style={styles.subtitulo}>Identificador del comercio: #{id}</Text>
        <Text style={styles.descripcion}>
          Acá se visualizan los horarios detallados, promociones vigentes y ubicación del comercio en Concepción del Uruguay.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  tarjetaFicha: {
    marginTop: 24,
    padding: 16,
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0B3A5D',
  },
  subtitulo: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 6,
  },
  descripcion: {
    fontSize: 14,
    color: '#334155',
    marginTop: 12,
    lineHeight: 20,
  },
});