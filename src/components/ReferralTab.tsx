import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  Pressable
} from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import { palette } from '@/themes/colors';
import { useReferrals, Referral } from '../hooks/useReferrals';

export default function ReferralTab() {
  const { referrals, query, setQuery, filter, setFilter } = useReferrals();
  const [selected, setSelected] = useState<Referral | null>(null);
  const tabs: Array<'Todas'|'Aprobadas'|'Pendientes'> = ['Todas','Aprobadas','Pendientes'];

  if (selected) {
    return (
      <SafeAreaView className="flex-1 bg-white">
        <Pressable
          onPress={() => setSelected(null)}
          className="flex-row items-center px-4 py-2"
        >
          <ArrowLeft size={32} color={palette.primary} />
          <Text className="ml-2 text-primary font-secondaryBd">Volver</Text>
        </Pressable>

        <View className="bg-white m-4 p-6 rounded-3xl shadow-lg">
          <Text className="text-2xl font-primary mb-2 text-textPrimary">
            {selected.businessName}
          </Text>
          <Text className="text-sm text-textSecondary mb-1">
            {selected.registeredAt}
          </Text>
          <Text className="text-sm text-textSecondary mb-1">
            {selected.address}
          </Text>
          <Text className="text-sm text-textSecondary mb-4">
            {selected.phone}
          </Text>

          <View className="flex-row justify-between items-center">
            <View className="px-2 py-1 bg-green100 rounded-full">
              <Text className="text-green700 font-secondaryBd text-sm ">
                {selected.status}
              </Text>
            </View>
            <View className="px-2 py-1 bg-yellow100 rounded-full">
              <Text className="text-yellow800 font-secondaryBd text-sm">
                +{selected.keys} recompensa
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="p-4">
        <TextInput
          placeholder="Buscar por nombre"
          value={query}
          onChangeText={setQuery}
          className="w-full bg-white border border-gray200 rounded-full px-4 py-2 mb-4 text-gray700"
        />

        <View className="flex-row space-x-2 mb-4">
          {tabs.map((tab) => (
            <Pressable
              key={tab}
              onPress={() => setFilter(tab)}
              className={`px-4 py-1 rounded-full ${
                filter === tab ? 'bg-primary' : 'bg-gray200'
              }`}
            >
              <Text className={`text-sm ${
                filter === tab ? 'text-white' : 'text-gray700'
              }`}>{tab}</Text>
            </Pressable>
          ))}
        </View>

        {referrals.map((ref, i) => (
          <Pressable
            key={i}
            onPress={() => setSelected(ref)}
            className="bg-white rounded-3xl shadow-md p-4 mb-4"
          >
            <Text className="text-lg font-secondaryBd text-textPrimary">
              {ref.businessName}
            </Text>
            <Text className="text-sm text-textSecondary mt-1">
              {ref.registeredAt}
            </Text>
            <Text className="text-sm text-textSecondary mt-1">
              {ref.address}
            </Text>
            <Text className="text-sm text-textSecondary mt-1 mb-3">
              {ref.phone}
            </Text>
            <View className="flex-row justify-between items-center">
              <View className="px-2 py-1 bg-green100 rounded-full">
                <Text className="text-green700 font-secondaryBd text-sm">
                  {ref.status}
                </Text>
              </View>
              <View className="px-2 py-1 bg-yellow100 rounded-full">
                <Text className="text-yellow800 font-secondaryBd text-sm">
                  +{ref.keys} llaves
                </Text>
              </View>
            </View>
          </Pressable>
        ))}

        {referrals.length === 0 && (
          <Text className="text-center text-gray400 mt-8">
            No se encontraron referencias.
          </Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
