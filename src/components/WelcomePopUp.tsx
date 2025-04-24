import { View, Text, Image, Animated, Pressable, useWindowDimensions } from 'react-native';
import { X } from 'lucide-react-native';
import { useRef, useEffect } from 'react';

export default function WelcomePopUp({ user, onClose }: { user: any; onClose: () => void }) {
  const { width } = useWindowDimensions();
  const avatarSize = width * 0.14; // 14% del ancho para que no ocupe tanto

  const fadeAnim  = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim,  { toValue: 1, duration: 400, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 1, duration: 400, useNativeDriver: true }),
    ]).start();
  }, []);

  const handleClose = () => {
    Animated.parallel([
      Animated.timing(fadeAnim,  { toValue: 0, duration: 300, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 300, useNativeDriver: true }),
    ]).start(onClose);
  };

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        transform: [{ translateY: slideAnim.interpolate({ inputRange: [0,1], outputRange: [30,0] }) }],
      }}
      className="w-full mb-4"  // separación inferior
    >
      <View className="bg-primary rounded-lg shadow-md flex-row items-center p-4">
        <Pressable onPress={handleClose} className="absolute top-2 right-2">
          <X size={20} color="white" />
        </Pressable>
        <Image
          source={user.image}
          style={{ width: avatarSize, height: avatarSize, borderRadius: avatarSize / 2 }}
        />
        <View className="ml-4">
          <Text className="text-white text-lg font-bold">
            ¡Hola, {user.name}!
          </Text>
          <Text className="text-white text-sm mt-1">
            Zona: {user.zone}
          </Text>
        </View>
      </View>
    </Animated.View>
  );
}
