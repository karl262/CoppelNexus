import React from 'react';
import { Modal, View, Text, Pressable } from 'react-native';
import { X } from 'lucide-react-native';
import { palette } from '@/themes/colors';

interface Props {
  visible: boolean;
  onClose: () => void;
  notification: {
    title: string;
    message: string;
  } | null;
}

export default function NotificationDetailModal({
  visible,
  onClose,
  notification,
}: Props) {
  if (!notification) return null;

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View className="flex-1 bg-black/30 justify-center items-center px-6">
        <View className="bg-white rounded-xl p-6 w-full max-w-md">
          <View className="flex-row justify-between items-start mb-4">
            <Text className="text-lg font-bold text-black flex-1">
              {notification.title}
            </Text>
            <Pressable onPress={onClose}>
              <X color={palette.gray600} size={24} />
            </Pressable>
          </View>
          <Text className="text-gray-700 text-base">{notification.message}</Text>
        </View>
      </View>
    </Modal>
  );
}
