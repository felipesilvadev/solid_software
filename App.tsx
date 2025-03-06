import { StatusBar } from 'expo-status-bar';

import './global.css';

import { Home } from '~/components/Home';

export default function App() {
  return (
    <>
      <StatusBar style="light" translucent />
      <Home />
    </>
  );
}
