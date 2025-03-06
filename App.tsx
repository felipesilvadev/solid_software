import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';

import './global.css';

import { Home } from '~/components/Home';

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
    <>
      <StatusBar style="light" translucent />

      <Home />
    </>
  );
}
