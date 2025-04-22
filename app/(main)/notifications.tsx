import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, View, Text, Pressable, StyleSheet } from 'react-native';
import NotificationCard from '@/components/NotiCard';
import NotificationDetailModal from '@/components/NotificationModal';
import { useNotifications } from '@/hooks/useNotifications';
import { ArrowLeft } from 'lucide-react-native';
import { palette } from '@/themes/colors';
import { router } from 'expo-router';

export default function NotificationsScreen() {
  const {
    currentTab,
    setCurrentTab,
    filteredNotifications,
    tabs,
    markAsRead,
  } = useNotifications();

  const [selected, setSelected] = useState<{
    title: string;
    message: string;
  } | null>(null);

  const handleCloseModal = () => {
    if (selected) {
      markAsRead(selected.title);
    }
    setSelected(null);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="flex-row items-center justify-between px-4 py-3 bg-[#006FB9] rounded-t-2xl">
        <View className="flex-row gap-4">
          <Pressable onPress={() => router.back()}>
            <ArrowLeft color={palette.white} size={22} style={styles.notifications} />
          </Pressable>
          <Text className="text-white text-xl font-bold ms-2">Notificaciones</Text>
        </View>
      </View>

      <View className="flex-row justify-start px-4 mt-4">
        {tabs.map((tab) => (
          <Pressable
            key={tab}
            onPress={() => setCurrentTab(tab as 'Sin leer' | 'Todas')}
            className={`px-4 py-2 rounded-full mr-2 ${currentTab === tab ? 'bg-primary' : 'border border-gray-300'
              }`}
          >
            <Text
              className={`text-sm font-medium ${currentTab === tab ? 'text-white' : 'text-black'
                }`}
            >
              {tab}
            </Text>
          </Pressable>
        ))}
      </View>

      <ScrollView className="px-4 mt-4">
        {filteredNotifications.map((item, index) => (
          <Pressable key={index} onPress={() => setSelected(item)}>
            <NotificationCard
              notification={{
                ...item,
                source: 'Sistema',
                time: 'Hace 2 días'
              }}
            />
          </Pressable>
        ))}
      </ScrollView>

      <NotificationDetailModal
        visible={!!selected}
        notification={selected}
        onClose={handleCloseModal}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 180,
    height: 60,
    marginLeft: 12,
  },
  notifications: {
    marginRight: 12,
  },
  profile: {
    marginRight: 12,
  },
});
