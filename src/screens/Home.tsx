import { useMemo, useState } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';

import { Screen } from '~/components/Screen';

export const Home = () => {
  const [bgColor, setBgColor] = useState('');

  const handleGenerateRandomColor = () => {
    const numberOfUniqueHexadecimalColors = 16777215;
    const hexadecimalColor = `#${Math.floor(Math.random() * numberOfUniqueHexadecimalColors).toString(16)}`;

    if (hexadecimalColor === bgColor) {
      handleGenerateRandomColor();
      return;
    }

    setBgColor(hexadecimalColor);
  };

  const textContrastColor = useMemo(() => {
    if (!bgColor) return 'text-stone-100';

    const r = parseInt(bgColor.substring(1, 3), 16);
    const g = parseInt(bgColor.substring(3, 5), 16);
    const b = parseInt(bgColor.substring(5, 7), 16);

    const luminosity = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    return luminosity > 150 ? 'text-zinc-900' : 'text-stone-100';
  }, [bgColor]);

  return (
    <Screen style={bgColor ? { backgroundColor: bgColor } : undefined}>
      <TouchableWithoutFeedback onPress={handleGenerateRandomColor}>
        <View className={styles.container}>
          <Text className={`${styles.text} ${textContrastColor}`}>Hello there</Text>
        </View>
      </TouchableWithoutFeedback>
    </Screen>
  );
};

const styles = {
  screen: 'bg-primary',
  container: 'flex flex-1 items-center justify-center',
  text: 'font-bambino-bold text-xl',
};
