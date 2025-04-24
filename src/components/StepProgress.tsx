import { View, Text } from 'react-native';
import React from 'react';
import { Check } from 'lucide-react-native';

interface Props {
  step: number;
}

const titles = ['Propietario', 'Negocio', 'Ubicación', 'Verificar'];


export default function StepProgress({ step }: Props) {
  return (
    <View className="mt-4 mb-4 flex-row items-center justify-between px-6">
      {titles.map((t, i) => {
        const idx = i + 1;
        const active = idx === step;
        const done = idx < step;

        return (
          <View key={t} className="flex-1 items-center">
            <View
              className={`h-8 w-8 items-center justify-center rounded-full ${
                done || active ? 'bg-primary300' : 'bg-gray300'
              }`}
            >
              {done ? (
                <Check size={16} className="text-white0" />
              ) : (
                <Text className="font-bold text-white0">
                  {idx}
                </Text>
              )}
            </View>
            <Text
              className={`mt-1 text-[10px] leading-3 ${
                active
                  ? 'text-primary300'
                  : done
                    ? 'text-gray500'
                    : 'text-gray400'
              }`}
            >
              {t}
            </Text>
            {i < titles.length - 1 && (
              <View className="absolute left-[64%] right-[-36%] top-4 h-0.5 bg-gray300" />
            )}
          </View>
        );
      })}
    </View>
  );
}
