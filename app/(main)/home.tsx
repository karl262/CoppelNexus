import TopNavbar from '@/components/NavTop';
import BottomTab from '@/components/BottomTabMenu';
import { ScrollView, View } from 'react-native';
import WelcomeCard from '@/components/WelcomeCard';
import MapPreview from '@/components/MapPreview';
import { useHomeData } from '@/hooks/useHomeData';

export default function Home() {
  const { user } = useHomeData();
  return (
    <View className="flex-1 bg-white">
      <TopNavbar />

      <ScrollView className="flex-1 px-4 py-4 space-y-4">
        <WelcomeCard user={user} />
        <MapPreview />
      </ScrollView> 

      <BottomTab />
    </View>
  );
}
