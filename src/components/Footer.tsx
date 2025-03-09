import { memo } from 'react';
import { Alert, Pressable, Text, View } from 'react-native';

type Props = {
  contrastColor: string;
  handleResetScreen: () => void;
  handleChangeCustomText: (text: string) => void;
};

export const Footer = memo(function Footer({
  contrastColor,
  handleResetScreen,
  handleChangeCustomText,
}: Props) {
  const handleChangeText = () => {
    Alert.prompt('Type a custom text', undefined, (text) => {
      if (text) {
        handleChangeCustomText(text);
      }
    });
  };

  return (
    <View className={styles.container}>
      <Pressable className={`${styles.button} border-${contrastColor}`} onPress={handleResetScreen}>
        <Text className={`${styles.text} text-${contrastColor}`}>Reset</Text>
      </Pressable>

      <Pressable className={`${styles.button} border-${contrastColor}`} onPress={handleChangeText}>
        <Text className={`${styles.text} text-${contrastColor}`}>Edit text</Text>
      </Pressable>
    </View>
  );
});

const styles = {
  container: 'flex flex-row justify-between px-4',
  button: 'border rounded-sm px-7 py-2 items-center justify-center',
  text: 'font-bambino',
};
