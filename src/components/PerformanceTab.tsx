import React from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function PerformanceTab() {
  return (
    <ScrollView className="p-4">
      <View className="bg-white rounded-xl shadow-md p-4 mb-4">
        <Text className="font-semibold text-base text-gray-900 mb-2">Tu progreso en abril</Text>
        <Text className="text-sm text-gray-500 mb-2">14 días</Text>
        <View className="w-full h-4 bg-gray-100 rounded-full overflow-hidden">
          <View className="h-4 bg-primary w-[50%]" />
        </View>
        <Text className="mt-2 text-sm text-gray-600">+5% vs febrero - Top 3 en tu zona</Text>
      </View>

      <Text className="font-semibold text-base text-gray-900 mb-2">Ranking de tu zona</Text>
      {[...Array(6)].map((_, i) => (
        <View key={i} className="flex-row items-center justify-between py-2 border-b border-gray-100">
          <Text className="text-gray-700 font-medium">{i + 1}. Christian</Text>
          <Text className="text-gray-500">24 referencias</Text>
        </View>
      ))}
    </ScrollView>
  );
}
