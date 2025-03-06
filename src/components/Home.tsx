import { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native';

export const Home = ({ children }: PropsWithChildren) => {
  return <SafeAreaView className={styles.container}>{children}</SafeAreaView>;
};

const styles = {
  container: 'flex flex-1 bg-primary',
};
