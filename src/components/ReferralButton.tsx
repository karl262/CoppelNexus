import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { ChevronLeft } from 'lucide-react-native';
import { palette } from '@/themes/colors';

export default function ReferralButton({ onBack, onNext, canNext }: {
  onBack: () => void;
  onNext: () => void;
  canNext: boolean;
}) {
  return (
    <View className="flex-row items-center justify-between px-6 py-4 bg-white border-t border-gray-200">
      <Pressable onPress={onBack} className="p-2">
        <ChevronLeft color={palette.primary} size={24} />
      </Pressable>
      <Pressable
        onPress={onNext}
        disabled={!canNext}
        className={`flex-1 py-3 ml-4 rounded-full ${canNext ? 'bg-primary' : 'bg-gray200'}`}
      >
        <Text className={`text-center text-white ${canNext ? 'font-semibold' : ''}`}>Continuar</Text>
      </Pressable>
    </View>
  );
}