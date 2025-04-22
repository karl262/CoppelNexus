import { useEffect } from 'react';
import { View, Image } from 'react-native';
import { SplashScreen, useRouter } from 'expo-router';
import { palette } from '@/themes/colors';
import logoCoppel from '~assets/images/logos/LOGO_COPPEL_AMARILLO-10.png';

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();

    const timer = setTimeout(() => {
      SplashScreen.hideAsync();
      router.replace('/(auth)/login');
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View
      className="flex-1 items-center justify-center"
      style={{ backgroundColor: palette.accent }}
    >

      <Image source={logoCoppel} className="w-48 h-48" resizeMode="contain" />
    </View>
  );
}
