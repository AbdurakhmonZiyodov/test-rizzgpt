import GradientText from "@/components/GradientText";
import RN from "@/components/RN";
import { Spacing } from "@/components/Spacing";
import { SourceSansProFonts } from "@/shared/assets/fonts/source-sans-pro.fonts";
import { GoBackSvg, MatchSvg } from "@/shared/assets/icons";
import { COLORS } from "@/shared/constants/colors";
import { normalizeHeight, normalizeWidth } from "@/shared/constants/dimensions";
import { ROOT_STACK } from "@/shared/routes";
import { CoreStyle, HIT_SLOP } from "@/shared/styles/globalStyles";
import { router } from "expo-router";
import Animated, {
  BounceInUp,
  FadeInDown,
  FadeInLeft,
  ReduceMotion,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Onboarding2() {
  return (
    <SafeAreaView
      edges={["top"]}
      style={[styles.container, CoreStyle.baseHorizantalPadding]}
    >
      <RN.TouchableOpacity
        activeOpacity={0.5}
        hitSlop={HIT_SLOP}
        onPress={() => {
          if (router.canGoBack()) {
            router.back();
          }
        }}
      >
        <GoBackSvg width={24} height={24} fill={COLORS.pink} />
      </RN.TouchableOpacity>

      <Animated.View entering={BounceInUp.duration(500)}>
        <MatchSvg height={normalizeHeight(800)} />
      </Animated.View>
      <RN.View as={"center"}>
        {[
          "Unlimited Rizz",
          "Coach Recommended",
          "x10 More Responses",
          "x8 More Dates",
        ].map((text, idx) => (
          <Animated.View
            key={text}
            entering={FadeInLeft.delay((idx + 1) * 150)}
          >
            <RN.Text style={styles.description}>{text}</RN.Text>
          </Animated.View>
        ))}
      </RN.View>

      <Spacing steps={3} />
      <Animated.View entering={FadeInDown.delay(1000)} style={styles.formView}>
        <GradientText
          style={styles.gradientTitle}
          colors={[COLORS.white, COLORS.green, COLORS.green]}
        >
          Elevate Your Game
        </GradientText>
        <Spacing />
        <RN.TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          onPress={() => {
            router.navigate(ROOT_STACK.onboarding3);
          }}
        >
          <RN.Text style={styles.buttonText}>Unlock Free Trial</RN.Text>
        </RN.TouchableOpacity>

        <Spacing steps={2} />
        <RN.Text style={styles.formViewFooterText}>
          risk-free trial then $8.67/week
        </RN.Text>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  description: {
    color: COLORS.white,
    fontFamily: SourceSansProFonts.SourceSansPro_400,
    fontSize: normalizeHeight(70),
    lineHeight: normalizeHeight(120),
  },
  gradientTitle: {
    fontSize: normalizeHeight(80),
    fontFamily: SourceSansProFonts.SourceSansPro_900,
  },
  button: {
    backgroundColor: COLORS.green2,
    paddingVertical: normalizeHeight(53),
    borderRadius: 100,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    fontSize: normalizeHeight(65),
    color: COLORS.white,
    fontFamily: SourceSansProFonts.SourceSansPro_700,
  },
  formView: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: "center",
    borderWidth: normalizeHeight(10),
    borderColor: COLORS.green2,
    borderRadius: normalizeWidth(50),
    backgroundColor: COLORS.darkGray,
  },
  formViewFooterText: {
    color: COLORS.white,
    fontSize: normalizeHeight(50),
    fontFamily: SourceSansProFonts.SourceSansPro_300,
  },
});
