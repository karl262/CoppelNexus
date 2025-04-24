import { View, Text, Animated, Pressable, useWindowDimensions } from 'react-native';
import { Gift, X } from 'lucide-react-native';
import { palette } from '@/themes/colors';
import { useRef, useEffect } from 'react';

export default function RewardPopUp({ referred, onClose }: { referred: any; onClose?: () => void }) {
  const { width } = useWindowDimensions();
  const containerPadding = 24;   // padding horizontal (px)
  
  // Animaciones
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 500, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 1, duration: 500, useNativeDriver: true }),
    ]).start();
  }, []);

  const handleClose = () => {
    if (!onClose) return;
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 0, duration: 500, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 500, useNativeDriver: true }),
    ]).start(onClose);
  };

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        transform: [{
          translateY: slideAnim.interpolate({ inputRange: [0,1], outputRange: [50,0] })
        }],
      }}
      className="w-full px-6 mt-4"  // ocupa todo el ancho + margen superior
    >
      <View className=" p-4 rounded-sm bg-info">
        {onClose && (
          <Pressable onPress={handleClose} className="absolute top-2 right-2 z-50">
            <X size={20} color="white" />
          </Pressable>
        )}
        <View className="flex-row items-center space-x-3">
          <Gift size={24} color={palette.white} />
          <Text className="text-white text-base font-bold">¡Reclama tu recompensa!</Text>
        </View>
        <Text className="text-white mt-2">
          Uno de tus referidos ha completado {referred.completedModules} módulo(s). Recompensa: {referred.rewardName}
        </Text>
      </View>
    </Animated.View>
  );
}
