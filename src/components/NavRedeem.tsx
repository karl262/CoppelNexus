import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';
import { useRouter } from 'expo-router';

interface NavRedeemProps {
  title: string;
}

export const NavRedeem = ({ title }: NavRedeemProps) => {
  const router = useRouter();
  
  return (
    <View className="flex-row items-center justify-between px-4 py-3 bg-[#006FB9]" >
      <View className="flex-row items-center gap-4" style={{borderBottomColor:'#F1F4FA'}}>
        <Pressable
          onPress={() => router.back()}
          accessibilityLabel="Volver atrás"
        >
          <ArrowLeft color="white" size={22} />
        </Pressable>
        <Text className="text-white text-lg font-bold ml-2">{title}</Text>
      </View>
    </View>
  );
};