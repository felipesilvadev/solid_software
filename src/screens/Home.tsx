import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useMemo, useState } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';

import { Footer } from '~/components/Footer';
import { Hint } from '~/components/Hint';
import { Screen } from '~/components/Screen';
import { ALREADY_SEEN_HINT } from '~/storage/localStorage';

export const Home = () => {
  const [customText, setCustomText] = useState('Hello there');
  const [bgColor, setBgColor] = useState('');

  const handleResetScreen = useCallback(async () => {
    await AsyncStorage.removeItem(ALREADY_SEEN_HINT);

    setBgColor('');
    setCustomText('Hello there');
  }, []);

  const handleChangeCustomText = useCallback((text: string) => {
    setCustomText(text);
  }, []);

  const handleGenerateRandomColor = () => {
    const numberOfUniqueHexadecimalColors = 16777215;
    const hexadecimalColor = `#${Math.floor(Math.random() * numberOfUniqueHexadecimalColors).toString(16)}`;

    if (hexadecimalColor === bgColor) {
      handleGenerateRandomColor();
      return;
    }

    setBgColor(hexadecimalColor);
  };

  const contrastColor = useMemo(() => {
    if (!bgColor) return 'stone-100';

    const r = parseInt(bgColor.substring(1, 3), 16);
    const g = parseInt(bgColor.substring(3, 5), 16);
    const b = parseInt(bgColor.substring(5, 7), 16);

    const luminosity = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    return luminosity > 150 ? 'zinc-900' : 'stone-100';
  }, [bgColor]);

  return (
    <Screen style={bgColor ? { backgroundColor: bgColor } : undefined}>
      <TouchableWithoutFeedback onPress={handleGenerateRandomColor}>
        <View className="flex flex-1 items-center justify-center">
          <Text className={`font-bambino-bold text-xl text-${contrastColor}`}>{customText}</Text>
        </View>
      </TouchableWithoutFeedback>

      <Footer
        contrastColor={contrastColor}
        handleResetScreen={handleResetScreen}
        handleChangeCustomText={handleChangeCustomText}
      />

      <Hint />
    </Screen>
  );
};
