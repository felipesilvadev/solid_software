import { ComponentProps, PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native';

type Props = ComponentProps<typeof SafeAreaView> & PropsWithChildren;

export const Screen = ({ className, children, ...rest }: Props) => {
  const defaultStyles = 'flex flex-1 bg-primary';

  return (
    <SafeAreaView className={defaultStyles} {...rest}>
      {children}
    </SafeAreaView>
  );
};
