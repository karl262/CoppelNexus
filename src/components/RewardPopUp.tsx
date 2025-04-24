import { View, Text, Animated, Pressable, useWindowDimensions } from 'react-native';
import { Gift, X } from 'lucide-react-native';
import { palette } from '@/themes/colors';
import { useRef, useEffect } from 'react';

export default function RewardPopUp({ referred, onClose }: { referred: any; onClose?: () => void }) {
  const fadeAnim  = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim,  { toValue: 1, duration: 400, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 1, duration: 400, useNativeDriver: true }),
    ]).start();
  }, []);

  const handleClose = () => {
    if (!onClose) return;
    Animated.parallel([
      Animated.timing(fadeAnim,  { toValue: 1, duration: 300, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 1, duration: 300, useNativeDriver: true }),
    ]).start(onClose);
  };

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        transform: [{ translateY: slideAnim.interpolate({ inputRange: [0,1], outputRange: [30,0] }) }],
      }}
      className="w-full mb-4"
    >
      <View className="bg-success400 rounded-lg shadow-md p-4">
        {onClose && (
          <Pressable onPress={handleClose} className="absolute top-2 right-2">
            <X size={20} color="black" />
          </Pressable>
        )}
        <View className="flex-row items-center space-x-3">
          <Gift size={24} color={palette.white} />
          <Text className="text-white text-base font-bold ms-2">
            ¡Reclama tu recompensa!
          </Text>
        </View>
        <Text className="text-white mt-2">
          Tu referido completó {referred.completedModules} módulo(s). Recompensa: {referred.rewardName}
        </Text>
      </View>
    </Animated.View>
  );
}
