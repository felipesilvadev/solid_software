import { memo } from 'react';
import { Alert, View } from 'react-native';

import { Button } from './Button';

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
      <Button color={contrastColor} text="Reset" onPress={handleResetScreen} />
      <Button color={contrastColor} text="Edit text" onPress={handleChangeText} />
    </View>
  );
});

const styles = {
  container: 'flex flex-row justify-between px-4',
};
