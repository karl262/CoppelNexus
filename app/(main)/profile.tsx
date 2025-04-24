import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavTop from '@/components/NavTop';
import BottomTab from '@/components/BottomTabMenu';

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <NavTop />
      <View
        style={{
          backgroundColor: '#006FB9',
          alignItems: 'center',
          paddingBottom: 40,
          position: 'relative',
        }}
      >
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 16,
            right: 0,
            bottom: 0,
            opacity: 0.1,
          }}
        >
          <Text style={{ color: 'white', fontSize: 20 }}>. . . . . . .</Text>
          <Text style={{ color: 'white', fontSize: 20 }}>. . . . . . .</Text>
          <Text style={{ color: 'white', fontSize: 20 }}>. . . . . . .</Text>
        </View>

        <View className="items-center mt-4">
        <View className="w-32 h-32 rounded-full overflow-hidden border-4 border-white justify-center items-center">
          <Image
            source={require('../../assets/images/profile-image.png')}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>

        </View>
      </View>

      <ScrollView className="px-6 mt-6">
        <Text className="text-xl font-bold mb-4 text-black">Mis datos</Text>

        <View className="mb-4">
          <Text className="text-sm text-gray-500 mb-1">Nombre completo</Text>
          <Text className="text-base text-black font-medium">
            Christian Serrano Puertos
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

      <BottomTab />
    </SafeAreaView>
  );
}
