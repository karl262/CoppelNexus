import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Pressable } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import { palette } from '@/themes/colors';
import { router } from 'expo-router';

export default function HelpScreen() {
    return (
        <SafeAreaView className="flex-1 bg-gray-50">
            <View className="flex-row items-center justify-between px-4 py-3 bg-primary rounded-t-2xl">
                <View className="flex-row gap-4 items-center">
                    <Pressable onPress={() => router.back()}>
                        <ArrowLeft size={22} color={palette.white} />
                    </Pressable>
                    <Text className="text-white text-xl font-bold">Ayuda</Text>
                </View>
                <View className="w-6" />
            </View>

            <View className="px-4 mt-6">
                <Text className="text-base font-semibold text-gray-800 mb-4">
                    ¿Cómo podemos ayudarte?
                </Text>

                <Pressable
                    onPress={() => router.push('/(main)/(settings)/helpChat')}
                    className="bg-primary px-4 py-3 rounded-xl mb-4"
                >
                    <Text className="text-white text-center font-semibold">Chat en vivo</Text>
                </Pressable>

                <Pressable
                    onPress={() => console.log('Enviar correo')}
                    className="bg-white px-4 py-3 rounded-xl border border-gray-300"
                >
                    <Text className="text-center font-semibold text-gray-800">
                        Enviar correo a soporte
                    </Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}
