import React from 'react';
import { View, Text, Image } from 'react-native';
import { palette } from '@/themes/colors';
import { typography } from '@/themes/typography';

export default function SummarySection({
  title, children
}: { title: string; children: React.ReactNode }) {
  return (
    <View className="mb-6">
      <Text style={{ ...typography.size.h3, fontFamily: typography.family.primary, color: palette.textPrimary }} className="mb-2">
        {title}
      </Text>
      <View className="bg-white rounded-lg shadow-md p-4">
        {children}
      </View>
    </View>
  );
}