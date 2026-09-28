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
      <View style= {styles.resena}> 
        <Text style= {styles.subtitulo}> Reseña</Text>
        <Text>{resena.estrellas}</Text>
        <Text>{resena.comentario}</Text>
        <Text>Respuesta del comercio:{resena.respuesta}</Text>
      </View>
    </SafeAreaView>
  );
}

export interface Resena {
  id: string;
  comercioId: string;
  usuarioId: string;
  estrellas: 1 | 2 | 3 | 4 | 5;
  comentario: string;
  respuesta: string | null;
  reportada: boolean;
  creadaEn: string;
  sincronizada: boolean;
}

const resena: Resena = {
  id: "res-2210",
  comercioId: "con-118",
  usuarioId: "usr-512",
  estrellas: 5,
  comentario: "Tenían el tornillo raro que no conseguía en ningún lado.",
  respuesta: "¡Gracias Marta! Siempre a las órdenes.",
  reportada: false,
  creadaEn: "2026-09-10T17:05:00-03:00",
  sincronizada: true
};

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
  resena: {
    marginTop: 20,
    padding: 15,
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