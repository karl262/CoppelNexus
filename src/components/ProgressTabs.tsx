import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import PerformanceTab from '@/components/PerformanceTab';
import ReferralTab from '@/components/ReferralTab';

export default function ProgressTabs() {
  const [activeTab, setActiveTab] = useState<'performance' | 'referrals'>('performance');

  return (
    <View className="flex-1">
      <View className="flex-row justify-around border-b border-gray-200 bg-white">
        {['Todos', 'Bajo rendimiento'].map((label, index) => {
          const key = index === 0 ? 'performance' : 'referrals';
          const isActive = activeTab === key;
          return (
            <Pressable key={key} className="flex-1 py-3 items-center" onPress={() => setActiveTab(key as any)}>
              <Text className={`font-semibold ${isActive ? 'text-primary border-b-2 border-primary pb-1' : 'text-gray-500'}`}>
                {label}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {activeTab === 'performance' ? <PerformanceTab /> : <ReferralTab />}
    </View>
  );
}
