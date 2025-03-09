import { useEffect, useState } from 'react';
import { Modal, Text, TextInput, View } from 'react-native';

import { Button } from './Button';

type Props = {
  visible: boolean;
  onCancel: () => void;
  onSubmit: (value: string) => void;
};

export const ModalPrompt = ({ visible, onCancel, onSubmit }: Props) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue('');
  }, [visible]);

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View className={styles.container}>
        <View className={styles.content}>
          <Text className={styles.title}>Type a custom text:</Text>
          <TextInput
            className={styles.input}
            value={value}
            onChangeText={setValue}
            placeholder="Type here"
          />

          <View className={styles.buttonsWrapper}>
            <Button text="Cancel" color="zinc-900" onPress={onCancel} />
            <Button text="OK" color="zinc-900" onPress={() => onSubmit(value)} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = {
  container: 'flex flex-1 items-center justify-center bg-black/50',
  content: 'w-11/12 max-w-md rounded-xl bg-white p-6',
  title: 'text-lg font-bambino-bold',
  input: 'mb-6 mt-4 border-b border-gray-300 pb-1 font-bambino text-base',
  buttonsWrapper: 'flex-row justify-end gap-2',
};
