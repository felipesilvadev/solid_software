import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import './global.css';

import { Home } from '~/screens/Home';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'BambinoNew-Regular': require('~/assets/fonts/BambinoNew-Regular.ttf'),
    'BambinoNew-Bold': require('~/assets/fonts/BambinoNew-Bold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <StatusBar style="light" translucent />

      <Home />
    </SafeAreaProvider>
  );
}
