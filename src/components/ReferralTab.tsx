import React from 'react';
import { ScrollView, Text, View, TextInput } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { palette } from '@/themes/colors';

interface Referral {
  businessName: string;
  phone: string;
  businessType: string;
  registeredAt: string;
  address: string;
  keys: number;
}

export default function ReferralTab() {

  const referrals: Referral[] = [
    {
      businessName: 'Nudos de Arte',
      phone: '2711222874',
      businessType: 'Emprendimiento',
      registeredAt: '21/04/2025',
      address: 'Calle 8 Nte, 407, Melesio Portillo, Fortín de las Flores, Veracruz',
      keys: 50,
    },
  ];

  return (
    <ScrollView className="p-4">
      <View className="mb-4">
        <TextInput
          placeholder="Buscar por nombre"
          className="border border-gray-300 bg-white rounded-lg px-4 py-2 text-gray-700"
        />
      </View>

      <View className="flex-row space-x-2 mb-4">
        {['Todas', 'Aprobadas', 'Pendientes'].map((label) => (
          <View key={label} className="px-4 py-1 bg-gray-100 rounded-full">
            <Text className="text-sm text-gray-700">{label}</Text>
          </View>
        ))}
      </View>

      {referrals.map((ref, index) => (
        <View key={index} className="bg-white rounded-xl shadow-sm p-4 mb-4">
          <Text className="text-base font-semibold text-gray-900">{ref.businessName}</Text>
          <Text className="text-sm text-gray-600 mt-1">{ref.registeredAt}</Text>
          <Text className="text-sm text-gray-600">{ref.address}</Text>
          <Text className="text-sm text-gray-600">{ref.phone}</Text>
          <View className="flex-row mt-2 space-x-2">
            <Text className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">Aprobado</Text>
            <Text className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
              +{ref.keys} llaves
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
