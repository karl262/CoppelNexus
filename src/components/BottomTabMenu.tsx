import { View, Pressable, Text } from 'react-native';
import {
    Home,
    ShoppingBag,
    BarChart2,
    type LucideIcon,
    UserPlusIcon,
    User,
} from 'lucide-react-native';
import { palette } from '@/themes/colors';
import { useBottomTab, TabKey } from '@/hooks/useBottomTab';
import { router } from 'expo-router';

const handleHomePress = () => router.push('/(main)/home');
const handleRedeemPress = () => router.push('/(main)/redeem');
const handleRegister = () => router.push('/(main)/microentrepreneurRegistry');
const handleProgressPress = () => router.push('/(main)/progress');
const handleProfilePress = () => router.push('/(main)/profile');

type TabItem = {
    key: TabKey;
    label: string;
    icon: LucideIcon;
    onPress: () => void;
};

export default function BottomTab() {
    const { current, setCurrent } = useBottomTab();

    const tabs: TabItem[] = [
        { key: 'home', label: 'Inicio', icon: Home, onPress: handleHomePress },
        { key: 'redeem', label: 'Canjea', icon: ShoppingBag, onPress: handleRedeemPress },
        { key: 'microentrepreneurRegistry', label: 'Registro', icon: UserPlusIcon, onPress: handleRegister },
        { key: 'progress', label: 'Seguimiento', icon: BarChart2, onPress: handleProgressPress },
        { key: 'profile', label: 'Perfil', icon: User, onPress: handleProfilePress },
    ];

    return (
        <View className="flex-row justify-around items-center py-3 bg-white border-t border-gray-200">
            {tabs.map(({ key, label, icon: Icon, onPress }) => (
                <Pressable
                    key={key}
                    className={`items-center ${key === 'microentrepreneurRegistry' ? 'relative -top-7' : ''}`}
                    onPress={() => {
                        setCurrent(key);
                        onPress();
                    }}
                >
                    {key === 'microentrepreneurRegistry' ? (
                        <View className="bg-primary rounded-full p-3">
                            <Icon
                                size={32}
                                color="white"
                            />
                        </View>
                    ) : (
                        <Icon
                            size={28}
                            color={current === key ? palette.primary : '#777'}
                        />
                    )}
                    <Text
                        className={`text-xs mt-1 ${current === key ? 'text-primary' : 'text-[#777]'}`}
                    >
                        {label}
                    </Text>
                </Pressable>
            ))}
        </View>
    );
}
