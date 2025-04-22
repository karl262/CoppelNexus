import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Pressable } from 'react-native';
import * as Icons from 'lucide-react-native';
import { router } from 'expo-router';
import SettingsGrid from '@/components/SettingsGrid';
import { palette } from '@/themes/colors';

export default function SettingsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="flex-row items-center justify-between px-4 py-3 bg-primary rounded-t-2xl">
        <View className="flex-row gap-4 items-center">
          <Pressable onPress={() => router.back()}>
            <Icons.ArrowLeft size={22} color={palette.white} />
          </Pressable>
          <Text className="text-white text-xl font-bold">Configuración</Text>
        </View>
        <View className="w-6" />
      </View>

      <View className="px-4 mt-6">
        <Text className="text-base font-semibold text-gray-800 mb-3">Aplicación</Text>
        <View className="flex-row flex-wrap gap-4">
          <SettingsGrid
            icon={Icons.Volume2}
            label="Sonidos"
            onPress={() => router.push('/(main)/(settings)/sounds')}
          />
          <SettingsGrid
            icon={Icons.Bell}
            label="Notificaciones"
            onPress={() => router.push('/(main)/(settings)/notifications')}
          />
        </View>
      </View>

      <View className="px-4 mt-8">
        <Text className="text-base font-semibold text-gray-800 mb-3">Soporte</Text>
        <View className="flex-row flex-wrap gap-4">
          <SettingsGrid
            icon={Icons.HelpCircle}
            label="Ayuda"
            onPress={() => router.push('/(main)/(settings)/help')}
          />
          <SettingsGrid
            icon={Icons.Info}
            label="Términos y condiciones"
            onPress={() => console.log('Términos')}
          />
        </View>
      </View>

      <View className="px-4 mt-8">
        <Text className="text-base font-semibold text-gray-800 mb-3">Cuenta</Text>
        <View className="flex-row flex-wrap gap-4">
          <SettingsGrid
            icon={Icons.LogOut}
            label="Cerrar Sesión"
            onPress={() => console.log('Cerraste Sesión')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
