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
  const [showRewardCard, setShowRewardCard] = useState(true);

  return (
    <View className="flex-1 bg-white">
      <TopNavbar />

      <ScrollView className="flex-1 px-4 py-4 space-y-4">
        {showWelcomeCard ? (
          <WelcomePopUp 
            user={user} 
            onClose={() => setShowWelcomeCard(false)} 
          />
        ) : showRewardCard ? (
          <RewardPopUp  
            referred={referredInfo} 
            onClose={() => setShowRewardCard(false)} 
          />
        ) : null}
        <MapPreview />
      </ScrollView> 

      <BottomTab />
    </View>
  );
}
