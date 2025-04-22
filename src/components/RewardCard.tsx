import { View, Text } from 'react-native';
import { Gift } from 'lucide-react-native';
import { palette } from '@/themes/colors';

export default function RewardCard({ referred }: { referred: any }) {
    return (
        <View className="bg-green-600 p-4 rounded-xl">
            <View className="flex-row items-center space-x-3">
                <Gift size={24} color={palette.white} />
                <Text className="text-white text-base font-bold">¡Reclama tu recompensa!</Text>
            </View>
            <Text className="text-white mt-2">
                Uno de tus referidos ha completado {referred.completedModules} módulo(s). Recompensa: {referred.rewardName}
            </Text>
        </View>
    );
}