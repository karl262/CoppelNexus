import { View, Text, Image, Animated, Pressable, useWindowDimensions } from 'react-native';
import { X } from 'lucide-react-native';
import { useRef, useEffect } from 'react';

export default function WelcomePopUp({ user, onClose }: { user: any; onClose: () => void }) {
  const { width } = useWindowDimensions();
  const avatarSize = width * 0.16; // 16% del ancho de pantalla

  // Hooks de animación
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 500, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 1, duration: 500, useNativeDriver: true }),
    ]).start();
  }, []);

  const handleClose = () => {
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
      className="w-full px-6"  // 100% ancho + padding horizontal
    >
      <View className="bg-primary p-4 rounded-lg flex-row items-center space-x-4">
        <Pressable onPress={handleClose} className="absolute top-2 right-2 z-50">
          <X size={20} color="white" />
        </Pressable>
        <Image
          source={user.image}
          style={{
            width: avatarSize,
            height: avatarSize,
            borderRadius: avatarSize / 2,
          }}
        />
        <View>
          <Text className="text-white text-lg font-bold">¡Hola, {user.name}!</Text>
          <Text className="text-white text-sm mt-1">Zona: {user.zone}</Text>
        </View>
      </View>
    </Animated.View>
  );
}
