import BottomTab from '@/components/BottomTabMenu';
import TopNavbar from '@/components/NavTop';
import React from 'react';
import { View } from 'react-native';

export default function ProgressScreen() {
    return (
        <View className="flex-1 bg-white">
      <TopNavbar />

      <View className="flex-1">
        {/* contenido principal */}
      </View>

      <BottomTab />
    </View>
    );
}
