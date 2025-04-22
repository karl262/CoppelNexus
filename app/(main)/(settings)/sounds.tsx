import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Pressable, Switch } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import { palette } from '@/themes/colors';
import { router } from 'expo-router';
import { useSettings } from '@/hooks/useSettings';

export default function SoundsSettingsScreen() {
  const {
    soundEffects,
    vibration,
    animations,
    systemMessages,
    rewardAvailable,
    toggleSetting,
  } = useSettings();

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="flex-row items-center justify-between px-4 py-3 bg-primary rounded-t-2xl">
        <View className="flex-row gap-4 items-center">
          <Pressable onPress={() => router.back()}>
            <ArrowLeft size={22} color={palette.white} />
          </Pressable>
          <Text className="text-white text-xl font-bold">Sonidos</Text>
        </View>
        <View className="w-6" />
      </View>

      <View className="px-4 mt-6">
        <Text className="text-base font-semibold text-gray-800 mb-3">General</Text>
        <SettingSwitch
          label="Efectos de sonido"
          value={soundEffects}
          onToggle={() => toggleSetting('soundEffects')}
        />
        <SettingSwitch
          label="Respuesta vibratoria"
          value={vibration}
          onToggle={() => toggleSetting('vibration')}
        />
        <SettingSwitch
          label="Animaciones"
          value={animations}
          onToggle={() => toggleSetting('animations')}
        />
      </View>

      <View className="px-4 mt-8">
        <Text className="text-base font-semibold text-gray-800 mb-3">Notificaciones</Text>
        <SettingSwitch
          label="Mensajes del sistema"
          value={systemMessages}
          onToggle={() => toggleSetting('systemMessages')}
        />
        <SettingSwitch
          label="Recompensa disponible"
          value={rewardAvailable}
          onToggle={() => toggleSetting('rewardAvailable')}
        />
      </View>
    </SafeAreaView>
  );
}

function SettingSwitch({
  label,
  value,
  onToggle,
}: {
  label: string;
  value: boolean;
  onToggle: () => void;
}) {
  return (
    <View className="flex-row items-center justify-between py-3 border-b border-gray-200">
      <Text className="text-sm text-gray-800">{label}</Text>
      <Switch
        value={value}
        onValueChange={onToggle}
        thumbColor={value ? palette.primary : '#ccc'}
        trackColor={{ false: '#ccc', true: '#b3d4ff' }}
      />
    </View>
  );
}
