import AsyncStorage from '@react-native-async-storage/async-storage';
import { memo, useEffect, useMemo, useState } from 'react';
import { Dimensions, Modal, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ALREADY_SEEN_HINT } from '~/storage/localStorage';

export const Hint = memo(function Hint() {
  const { width, height } = Dimensions.get('window');
  const insets = useSafeAreaInsets();

  const [showHint, setShowHint] = useState(false);

  const handleClose = async () => {
    setShowHint(false);
    await AsyncStorage.setItem(ALREADY_SEEN_HINT, 'true');
  };

  const checkIfAlreadySeenHint = async () => {
    const alreadySeen = await AsyncStorage.getItem(ALREADY_SEEN_HINT);

    if (!alreadySeen) {
      setShowHint(true);
    }
  };

  useEffect(() => {
    checkIfAlreadySeenHint();
  }, []);

  const randomPosition = useMemo(
    () => ({
      top: Math.random() * (height / 2 - 200) + insets.top,
      left: Math.random() * (width - 200),
    }),
    []
  );

  if (!showHint) return null;

  return (
    <Modal transparent animationType="fade">
      <View className={styles.container}>
        <TouchableOpacity className={styles.pressable} activeOpacity={1} onPress={handleClose} />

        <View
          className={styles.tooltipContainer}
          style={{
            top: randomPosition.top,
            left: randomPosition.left,
          }}>
          <Text className={styles.tooltipText}>
            Press anywhere on the screen to change the background color ;)
          </Text>
          <View className={styles.tooltipArrow} />
        </View>
      </View>
    </Modal>
  );
});

const styles = {
  container: 'flex flex-1',
  pressable: 'flex flex-1 bg-neutral-900 opacity-75',
  tooltipContainer:
    'absolute bg-secondary p-3 rounded-md items-center max-w-[200px] animate-bounce',
  tooltipText: 'font-bambino text-sm text-stone-100',
  tooltipArrow:
    'mt-2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-primary',
};
