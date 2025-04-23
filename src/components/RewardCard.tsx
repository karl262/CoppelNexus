import { View, Text, Animated, Pressable } from 'react-native';
import { Gift, X } from 'lucide-react-native';
import { palette } from '@/themes/colors';
import { useRef, useEffect } from 'react';

export default function RewardCard({ referred, onClose }: { referred: any; onClose?: () => void }) {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // Fade in and slide up animation on mount
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }),
        ]).start();
    }, []);

    const handleClose = () => {
        if (onClose) {
            Animated.parallel([
                Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true,
                }),
                Animated.timing(slideAnim, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true,
                }),
            ]).start(() => onClose());
        }
    };

    return (
        <Animated.View
            style={{
                opacity: fadeAnim,
                transform: [
                    {
                        translateY: slideAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [50, 0],
                        }),
                    },
                ],
            }}
        >
            <View className="bg-green-600 p-4 rounded-sm">
                {onClose && (
                    <Pressable
                        onPress={handleClose}
                        className="absolute top-2 right-2 z-50"
                    >
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