import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "global.css";

export default function RootLayout() {

  return (

    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack screenOptions={{ 
          headerShown: false,
          animation: 'fade_from_bottom'
           }} />
      </SafeAreaView>
    </SafeAreaProvider>

  );

}
