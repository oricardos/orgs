import { SafeAreaView, View, StatusBar } from 'react-native';
import { Basket } from './src/screens/Basket';
import { useFonts, Rubik_400Regular, Rubik_600SemiBold, Rubik_700Bold } from '@expo-google-fonts/rubik';
import mock from './src/mocks/cesta'

export default function App() {
  const [fontLoaded] = useFonts({
    "RubikRegular": Rubik_400Regular,
    "RubikSemiBold": Rubik_600SemiBold,
    "RubikBold": Rubik_700Bold
  });

  if (!fontLoaded) {
    return <View />
  }

  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <Basket {...mock} />
    </SafeAreaView>
  );
}
