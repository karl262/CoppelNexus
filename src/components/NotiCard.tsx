import React from 'react';
import { View, Text } from 'react-native';
import { Mail } from 'lucide-react-native';
import { palette } from '@/themes/colors';

interface Props {
  notification: {
    title: string;
    message: string;
    source: string;
    time: string;
    isRead: boolean;
  };
}

export default function NotificationCard({ notification }: Props) {
  return (
    <View
      className={`flex-row p-4 mb-3 rounded-lg ${
        notification.isRead ? 'bg-white' : 'bg-gray-100'
      }`}
    >
      <Mail color={palette.gray500} className="mr-3 mt-1" />
      <View className="flex-1">
        <Text className="font-semibold text-black">{notification.title}</Text>
        <Text className="text-sm text-gray-700" numberOfLines={2}>
          {notification.message}
        </Text>
        <Text className="text-xs text-gray-400 mt-1">
          {notification.source} · {notification.time}
        </Text>
      </View>
    </View>
  );
}
