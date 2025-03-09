import { Pressable, PressableProps, Text } from 'react-native';

type Props = PressableProps & {
  color: string;
  text: string;
};

export const Button = ({ color, text, ...rest }: Props) => {
  return (
    <Pressable
      className={`${styles.button} ${color === 'stone-100' ? 'border-stone-100' : 'border-zinc-900'}`}
      {...rest}>
      <Text
        className={`${styles.text} ${color === 'stone-100' ? 'text-stone-100' : 'text-zinc-900'}`}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = {
  button: 'border rounded-sm px-7 py-2 items-center justify-center',
  text: 'font-bambino',
};
