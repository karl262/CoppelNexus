import { View, Image, Pressable } from "react-native";
import { Bell, Settings2 } from "lucide-react-native";
import logo from '~assets/images/logos/LOGO_COPPEL_VER_BCO-05.png'
import { router } from "expo-router";
import { StyleSheet } from "react-native";
import { palette } from "@/themes/colors";

const handleNotification = () => {
    router.push('/(main)/notifications');
}

const handleSettings = () => {
    router.push('/(main)/settings');
}

export default function TopNavbar() {
    return (
        <View className="flex-row items-center justify-between px-4 py-3 bg-[#006FB9] rounded-t-2xl">
            <Image source={logo} style={styles.logo} resizeMode="contain" />
            <View className="flex-row gap-4">
                <Pressable onPress={() => handleNotification()}>
                    <Bell color={palette.white} size={22} style={styles.notifications} />
                </Pressable>
                <Pressable onPress={() => handleSettings()}>
                    <Settings2 color={palette.white} size={22} style={styles.profile} />
                </Pressable>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    logo: {
        width: 180,
        height: 60,
        marginLeft: 12,
    },
    notifications: {
        marginRight: 12,
    },
    profile: {
        marginRight: 12,
    },
});