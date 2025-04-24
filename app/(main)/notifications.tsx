// src/features/notifications/screens/NotificationsScreen.tsx
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, View, Text, Pressable } from 'react-native';
import NotificationCard from '@/components/NotiCard';
import NotificationDetailModal from '@/components/NotificationModal';
import { ArrowLeft } from 'lucide-react-native';
import { palette } from '@/themes/colors';
import { useRouter } from 'expo-router';

interface NotificationItem {
  title: string;
  message: string;
  source: string;
  time: string;
  isRead: boolean;
}

const dummyNotifications: NotificationItem[] = Array.from({ length: 10 }, (_, i) => ({
  title: `Notificación ${i + 1}`,
  message: `Este es el contenido de la notificación número ${i + 1}.`,
  source: 'Sistema',
  time: `${Math.floor(Math.random() * 24) + 1}h atrás`,
  isRead: i % 3 === 0,
}));

export default function NotificationsScreen() {
  const router = useRouter();
  const [notifications, setNotifications] = useState<NotificationItem[]>(dummyNotifications);
  const [currentTab, setCurrentTab] = useState<'Sin leer' | 'Todas'>('Sin leer');
  const [selected, setSelected] = useState<NotificationItem | null>(null);

  const filteredNotifications =
    currentTab === 'Sin leer'
      ? notifications.filter((n) => !n.isRead)
      : notifications;

  const handleCloseModal = () => {
    if (selected) {
      setNotifications((prev) =>
        prev.map((n) =>
          n.title === selected.title ? { ...n, isRead: true } : n
        )
      );
      setCurrentTab('Todas');
    }
    setSelected(null);
  };

  const tabs: Array<'Sin leer' | 'Todas'> = ['Sin leer', 'Todas'];

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="flex-row items-center justify-between px-4 py-3 bg-primary rounded-t-2xl">
        <View className="flex-row items-center">
          <Pressable onPress={() => router.back()} className="mr-3">
            <ArrowLeft size={22} color={palette.white} />
          </Pressable>
          <Text className="text-white text-xl font-bold">Notificaciones</Text>
        </View>
      </View>

      <View className="flex-row px-4 py-3 bg-white">
        {tabs.map((tab) => (
          <Pressable
            key={tab}
            onPress={() => setCurrentTab(tab)}
            className={`px-4 py-2 mr-2 rounded-full ${
              currentTab === tab ? 'bg-primary' : 'border border-gray-300'
            }`}
          >
            <Text className={`text-sm ${
              currentTab === tab ? 'text-white' : 'text-black'
            }`}>{tab}</Text>
          </Pressable>
        ))}
      </View>

      <ScrollView className="px-4 mt-2">
        {filteredNotifications.map((item, index) => (
          <Pressable key={index} onPress={() => setSelected(item)}>
            <NotificationCard notification={item} />
          </Pressable>
        ))}
        {filteredNotifications.length === 0 && (
          <Text className="text-center text-gray-400 mt-8">
            No hay notificaciones para mostrar.
          </Text>
        )}
      </ScrollView>

      <NotificationDetailModal
        visible={!!selected}
        notification={selected}
        onClose={handleCloseModal}
      />
    </SafeAreaView>
  );
}
