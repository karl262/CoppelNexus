import TopNavbar from '@/components/NavTop';
import BottomTab from '@/components/BottomTabMenu';
import { View } from 'react-native';

export default function Home() {
  return (
    <View className="flex-1 bg-white">
      <TopNavbar />

      <View className="flex-1">
        {/* contenido principal */}
      </View>

      <BottomTab />
    </View>
  );
}
