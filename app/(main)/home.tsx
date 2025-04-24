import TopNavbar from '@/components/NavTop';
import BottomTab from '@/components/BottomTabMenu';
import { ScrollView, View } from 'react-native';
import WelcomePopUp from '@/components/WelcomePopUp';
import RewardPopUp from '@/components/RewardPopUp';
import MapPreview from '@/components/MapPreview';
import { useHomeData } from '@/hooks/useHomeData';
import { useState } from 'react';

export default function Home() {
  const { user, referredInfo } = useHomeData();
  const [showWelcomeCard, setShowWelcomeCard] = useState(true);
  const [showRewardCard, setShowRewardCard] = useState(false);

  return (
    <View className="flex-1 bg-white">
      <TopNavbar />

      {/* Contenedor absoluto para popups */}
      <View className="absolute inset-x-0 top-28 px-4 z-20">
        {showWelcomeCard && (
          <WelcomePopUp
            user={user}
            onClose={() => {
              // Oculta welcome & muestra reward en un solo paso
              setShowWelcomeCard(false);
              setShowRewardCard(true);
            }}
          />
        )}
        {showRewardCard && (
          <RewardPopUp
            referred={referredInfo}
            onClose={() => setShowRewardCard(false)}
          />
        )}
      </View>

      <ScrollView className="flex-1 px-4 pt-4">
        <MapPreview />
      </ScrollView>

      <BottomTab />
    </View>
  );
}
