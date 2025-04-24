import React from 'react';
import { ScrollView, Text, View } from 'react-native';

interface CardData {
  name: string;
  business: string;
  module: number;
  completed: number;
  total: number;
}

export default function PerformanceTab() {
  const cards: CardData[] = Array.from({ length: 10 }, (_, idx) => ({
    name: 'Juan Pérez López',
    business: "Miscelánea 'La bendición'",
    module: idx + 1,
    completed: idx + 1,
    total: 20,
  }));

  return (
    <ScrollView className="p-4 bg-white">
      {cards.map((card, index) => {
        const percent = Math.floor((card.completed / card.total) * 100);
        return (
          <View key={index} className="bg-white rounded-3xl shadow-md p-4 mb-4">
            <Text className="font-semibold text-base text-textPrimary mb-1">
              {card.name}
            </Text>
            <Text className="text-sm text-textSecondary mb-2">
              {card.business}
            </Text>

            <Text className="text-sm text-textSecondary mb-2">
              Módulo {card.module}
            </Text>

            <View className="w-full h-2 bg-gray100 rounded-full overflow-hidden">
              <View
                className="h-2 bg-primary"
                style={{ width: `${percent}%` }}
              />
            </View>

            <View className="flex-row justify-between items-center mt-2">
              <Text className="text-xs text-textSecondary">
                {card.completed}/{card.total} cursos totales
              </Text>
              <Text className="text-xs font-semibold text-textPrimary">
                {percent}%
              </Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}
