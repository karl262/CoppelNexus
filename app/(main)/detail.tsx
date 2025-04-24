import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Pressable,
  Image,
  useWindowDimensions
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { palette } from '@/themes/colors';

// Componente KPI Box
function KpiBox({ count, total, label }: { count: number; total: number; label: string }) {
  const percent = Math.floor((count / total) * 100);
  return (
    <View className="w-1/2 p-2">
      <View className="bg-primary p-4 rounded-2xl items-center justify-center">
        <Text className="text-white text-xl font-primary font-bold">
          {count}/{total}
        </Text>
        <Text className="text-white text-sm mt-1 font-secondary">
          {label}
        </Text>
      </View>
      <Text className="text-gray-600 text-xs mt-2 text-center">
        {percent}%
      </Text>
    </View>
  );
}

// Componente de sección con botón Editar
function SectionCard({
  title,
  onEdit,
  children
}: {
  title: string;
  onEdit: () => void;
  children: React.ReactNode;
}) {
  return (
    <View className="bg-white rounded-2xl shadow p-4 mb-4">
      <View className="flex-row justify-between items-center mb-3">
        <Text className="text-lg font-primary font-bold">{title}</Text>
        <Pressable onPress={onEdit}>
          <Text className="text-primary font-secondaryBd">Editar</Text>
        </Pressable>
      </View>
      {children}
    </View>
  );
}

export default function TrackingDetail() {
  const { clientId } = useLocalSearchParams<{ clientId: string }>();
  const router = useRouter();
  const { width } = useWindowDimensions();

  // Datos de ejemplo (reemplazar con hook real)
  const data = {
    clientId,
    name: 'Juan Pérez López',
    business: "Miscelánea 'La bendición'",
    lessons: { completed: 55, total: 85 },
    webinars: { completed: 15, total: 15 },
    owner: { name: 'Juan Pérez López', email: 'perez.ocampo@gmail.com', phone: '55 1234 5678' },
    businessPhoto: require('~assets/images/store.jpg'),
    businessType: 'Abarrotes',
    registeredAt: '15/03/2025',
    locationPhoto: require('~assets/images/mapa.png'),
    address: 'Av. Juárez #123, Centro, CDMX'
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="flex-row items-center px-4 py-3 bg-primary">
        <Pressable onPress={() => router.back()} className="mr-3">
          <ArrowLeft size={24} color={palette.white} />
        </Pressable>
        <Text className="flex-1 text-white text-xl font-primary font-bold">
          {data.business}
        </Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView className="px-4 py-4">
        {/* KPI Boxes */}
        <View className="flex-row mb-4">
          <KpiBox {...data.lessons} label="lecciones" />
          <KpiBox {...data.webinars} label="webinars" />
        </View>

        {/* Sección Propietario */}
        <SectionCard title="Propietario" onEdit={() => {/* navegar a editar propietario */}}>
          <Text className="font-secondaryBd text-base mb-1">{data.owner.name}</Text>
          <Text className="text-sm text-textSecondary">Correo electrónico: {data.owner.email}</Text>
          <Text className="text-sm text-textSecondary">Teléfono: {data.owner.phone}</Text>
        </SectionCard>

        {/* Sección Negocio */}
        <SectionCard title="Negocio" onEdit={() => {/* navegar a editar negocio */}}>
          <Image
            source={data.businessPhoto}
            className="w-full h-40 mb-3 rounded-lg"
            resizeMode="cover"
          />
          <Text className="font-secondaryBd text-base mb-1">{data.business}</Text>
          <Text className="text-sm text-textSecondary">Tipo: {data.businessType}</Text>
          <Text className="text-sm text-textSecondary">Fecha de registro: {data.registeredAt}</Text>
        </SectionCard>

        {/* Sección Ubicación */}
        <SectionCard title="Ubicación" onEdit={() => {/* navegar a editar ubicación */}}>
          <Image
            source={data.locationPhoto}
            className="w-full h-40 mb-3 rounded-lg"
            resizeMode="cover"
          />
          <Text className="text-sm text-textSecondary">{data.address}</Text>
        </SectionCard>

        {/* Aquí podrías agregar más secciones si es necesario */}
      </ScrollView>
    </SafeAreaView>
  );
}
