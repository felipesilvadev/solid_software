import { memo, useMemo, useState } from 'react';
import { Dimensions, Platform, View } from 'react-native';

import { Button } from './Button';
import { ModalPrompt } from './ModalPrompt';

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
  const { height } = Dimensions.get('window');

  const [showPrompt, setShowPrompt] = useState(false);

  const footerPaddingBottom = useMemo(() => {
    if (Platform.OS === 'android') {
      return 16;
    }

    if (Platform.OS === 'ios') {
      const isSmallDevice = height < 700;

      if (isSmallDevice) return 16;

      return 8;
    }
  }, []);

  return (
    <View
      className={styles.container}
      style={{
        paddingBottom: footerPaddingBottom,
      }}>
      <Button color={contrastColor} text="Reset" onPress={handleResetScreen} />
      <Button color={contrastColor} text="Edit text" onPress={() => setShowPrompt(true)} />

      <ModalPrompt
        visible={showPrompt}
        onCancel={() => setShowPrompt(false)}
        onSubmit={(text) => {
          handleChangeCustomText(text);
          setShowPrompt(false);
        }}
      />
    </View>
  );
});

const styles = {
  container: 'flex flex-row justify-between px-4',
};
