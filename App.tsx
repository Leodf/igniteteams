import { ThemeProvider } from "styled-components/native";
import Groups from "@screens/Groups";
import theme from "src/theme";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import Loading from "@components/Loading";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import NewGroup from "@screens/NewGroup";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar style="light" backgroundColor="transparent" translucent />
        {fontsLoaded ? <NewGroup /> : <Loading />}
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
