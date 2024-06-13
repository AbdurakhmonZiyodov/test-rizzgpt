import RN from "@/components/RN";
import { SourceSansProFonts } from "@/shared/assets/fonts/source-sans-pro.fonts";
import { COLORS } from "@/shared/constants/colors";
import { normalizeHeight } from "@/shared/constants/dimensions";
import { ROOT_STACK } from "@/shared/routes";
import { useIsFocused } from "@react-navigation/native";
import { router } from "expo-router";
import { useCallback, useEffect } from "react";
import Animated, { BounceInUp } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Onboarding1() {
  const isFocused = useIsFocused();
  const navigateToNextScreen = useCallback(() => {
    setTimeout(() => {
      router.navigate(ROOT_STACK.onboarding2);
    }, 2000);
  }, []);

  useEffect(() => {
    isFocused && navigateToNextScreen();
  }, [isFocused, navigateToNextScreen]);
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <Animated.View entering={BounceInUp.delay(150)}>
        <RN.Text style={styles.title}>RizzGPT</RN.Text>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: COLORS.pink,
    fontSize: normalizeHeight(100),
    textTransform: "uppercase",
    fontFamily: SourceSansProFonts.SourceSansPro_900,
  },
});
