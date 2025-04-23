import { MapIcon } from "lucide-react-native";
import { View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function MapPreview() {
    return (
        <SafeAreaProvider>
            <View>
                <Text className="text-black text-lg font-bold"></Text>
                <MapIcon size={32}></MapIcon>
            </View>
        </SafeAreaProvider>
    );



}