import BottomTab from '@/components/BottomTabMenu';
import TopNavbar from '@/components/NavTop';
import React from 'react';
import { View } from 'react-native';
import ProgressTabs from '@/components/ProgressTabs';

export default function ProgressScreen() {
    return (
        <View className="flex-1 bg-white">
      <TopNavbar />

      <View className="flex-1">
        <ProgressTabs />
      </View>

      <BottomTab />
    </View>
    );
}
