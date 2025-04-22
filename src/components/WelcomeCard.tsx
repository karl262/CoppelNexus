import { View, Text, Image } from 'react-native';

export default function WelcomeCard({ user }: { user: any }) {
    return (
        <View className="bg-primary p-4 rounded-xl flex-row items-center space-x-4 mb-5">
            <Image source={user.image} className="w-16 h-16 rounded-full" />
            <View>
                <Text className="text-white text-lg font-bold ms-2">¡Hola, {user.name}!</Text>
                <Text className="text-white text-sm mt-1 ms-2">Zona: {user.zone}</Text>
            </View>
        </View>
    );
}