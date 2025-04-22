import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavTop from '@/components/NavTop';

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">

      <NavTop />

      <View className="items-center -mt-2">
        <View className="w-32 h-32 rounded-full overflow-hidden border-4 border-white">
          <Image
            source={require('~assets/images/profile-image.png')}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>
      </View>

      <ScrollView className="px-6 mt-6">
        <Text className="text-xl font-bold mb-4 text-black">Mis datos</Text>

        <View className="mb-4">
          <Text className="text-sm text-gray-500 mb-1">Nombre completo</Text>
          <Text className="text-base text-black font-medium">
            Andrea Fuentes Rodríguez
          </Text>
        </View>

        <View className="mb-4">
          <Text className="text-sm text-gray-500 mb-1">Número de colaborador</Text>
          <Text className="text-base text-black font-medium">12345678</Text>
        </View>

        <View className="mb-4">
          <Text className="text-sm text-gray-500 mb-1">Zona asignada</Text>
          <Text className="text-base text-black font-medium">
            Córdoba, Veracruz
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
