import RN from "@/components/RN";
import { SourceSansProFonts } from "@/shared/assets/fonts/source-sans-pro.fonts";
import { COLORS } from "@/shared/constants/colors";
import { normalizeHeight, normalizeWidth } from "@/shared/constants/dimensions";
import { CoreStyle } from "@/shared/styles/globalStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Spacing } from "@/components/Spacing";
import {
  OnboarindScreen1Image1,
  OnboarindScreen1Image2,
  OnboarindScreen1Image3,
} from "@/shared/assets/images/onboarding";
import Animated, {
  BounceInDown,
  FadeInDown,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";
import { router } from "expo-router";
import { ROOT_STACK } from "@/shared/routes";

export default function Onboarding3() {
  const animatedRotate = useSharedValue(0);
  const animatedScale = useSharedValue(1.2);

  useEffect(() => {
    animatedRotate.value = withDelay(200, withTiming(20));
    animatedScale.value = withDelay(350, withTiming(1));
  }, []);

  const animatedImage1Style = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: `-${animatedRotate.value}deg`,
      },
      {
        translateX: -30,
      },
      {
        translateY: -20,
      },
    ],
  }));

  const animatedImage2Style = useAnimatedStyle(() => ({
    transform: [
      {
        scale: animatedScale.value,
      },
    ],
  }));
  const animatedImage3Style = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: `${animatedRotate.value}deg`,
      },
      {
        translateX: 30,
      },
      {
        translateY: -20,
      },
    ],
  }));
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={CoreStyle.flex1}
      colors={[COLORS.cerise, COLORS.black, COLORS.black, COLORS.black]}
    >
      <SafeAreaView edges={["top", "bottom"]} style={[styles.container]}>
        <Animated.View entering={FadeInDown.delay(100)}>
          <RN.Text style={styles.title}>RizzGPT</RN.Text>
        </Animated.View>

        <Spacing height={normalizeHeight(400)} />
        <Animated.View entering={BounceInDown.delay(240)}>
          <RN.View w={"70%"} as={"center"}>
            <RN.Text style={styles.description}>
              Upload a screenshot of a chat or bio
            </RN.Text>
          </RN.View>
        </Animated.View>
        <Spacing height={normalizeHeight(100)} />

        <RN.View ai={"center"} mt={20}>
          <Animated.Image
            source={OnboarindScreen1Image3}
            style={[
              styles.image,
              {
                transformOrigin: "bottom right",
              },
              animatedImage1Style,
            ]}
          />
          <Animated.Image
            source={OnboarindScreen1Image2}
            style={[styles.image, animatedImage2Style]}
          />
          <Animated.Image
            source={OnboarindScreen1Image1}
            style={[
              styles.image,
              {
                transformOrigin: "bottom left",
              },
              animatedImage3Style,
            ]}
          />
        </RN.View>

        <RN.View style={CoreStyle.flex1} />
        <Animated.View
          entering={FadeInDown.delay(500)}
          style={CoreStyle.baseHorizantalPadding}
        >
          <RN.TouchableOpacity
            onPress={() => {
              router.navigate(ROOT_STACK.onboarding4);
            }}
            style={styles.button}
            activeOpacity={0.5}
          >
            <RN.Text style={styles.buttonText}>Upload Screenshot</RN.Text>
          </RN.TouchableOpacity>
        </Animated.View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.transparent,
  },
  title: {
    color: COLORS.white,
    fontSize: normalizeHeight(100),
    textTransform: "uppercase",
    fontFamily: SourceSansProFonts.SourceSansPro_900,
    textAlign: "center",
  },
  description: {
    color: COLORS.white,
    fontFamily: SourceSansProFonts.SourceSansPro_400,
    fontSize: normalizeHeight(80),
    textAlign: "center",
  },
  button: {
    backgroundColor: COLORS.green2,
    paddingVertical: normalizeHeight(53),
    borderRadius: 100,
    alignItems: "center",
    width: "100%",
    shadowColor: COLORS.green2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 6,
  },
  buttonText: {
    fontSize: normalizeHeight(65),
    color: COLORS.white,
    fontFamily: SourceSansProFonts.SourceSansPro_700,
  },
  image: {
    height: normalizeHeight(755),
    width: normalizeWidth(360),
    borderRadius: normalizeHeight(40),
    resizeMode: "contain",
    position: "absolute",
    borderWidth: 2,
    borderColor: COLORS.white,
  },
});
