import RN from "@/components/RN";
import { Spacing } from "@/components/Spacing";
import { SourceSansProFonts } from "@/shared/assets/fonts/source-sans-pro.fonts";
import { CopySvg, GoBackSvg, PlusSvg } from "@/shared/assets/icons";
import { COLORS } from "@/shared/constants/colors";
import { normalizeHeight, normalizeWidth } from "@/shared/constants/dimensions";
import { CoreStyle, HIT_SLOP } from "@/shared/styles/globalStyles";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Onboarding4() {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={CoreStyle.flex1}
      colors={[COLORS.cerise, COLORS.black, COLORS.black, COLORS.black]}
    >
      <SafeAreaView
        edges={["top", "bottom"]}
        style={[styles.container, CoreStyle.baseHorizantalPadding]}
      >
        <RN.View>
          <RN.TouchableOpacity
            activeOpacity={0.5}
            style={styles.backButton}
            onPress={() => {
              if (router.canGoBack()) {
                router.back();
              }
            }}
            hitSlop={HIT_SLOP}
          >
            <GoBackSvg width={24} height={24} fill={COLORS.white} />
          </RN.TouchableOpacity>
          <RN.Text style={styles.title}>RizzGPT</RN.Text>
          <RN.TouchableOpacity
            activeOpacity={0.5}
            style={[styles.backButton, styles.plusButton]}
            hitSlop={HIT_SLOP}
          >
            <PlusSvg
              width={26}
              height={26}
              stroke={COLORS.white}
              strokeWidth={3}
            />
          </RN.TouchableOpacity>
        </RN.View>
        <RN.ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <Spacing height={normalizeHeight(160)} />
          <RN.View style={styles.usersScreenshot}>
            <RN.Text style={styles.usersScreenshotText}>
              User’s screenshot
            </RN.Text>
          </RN.View>

          <Spacing steps={2} />
          <RN.Text style={styles.warning}>Tap to copy rizz 👇</RN.Text>
          <Spacing steps={2} />

          <RN.View style={styles.whiteForm}>
            <RN.Text style={[styles.warning, styles.whiteFormDescription]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              quis est ut dui faucibus dapibus nec vel erat.
            </RN.Text>
            <RN.TouchableOpacity
              activeOpacity={0.5}
              style={styles.whiteFormCopyIcon}
            >
              <CopySvg width={24} height={24} fill={COLORS.black} />
              <RN.Text style={styles.whiteFormCopyIconText}>copy</RN.Text>
            </RN.TouchableOpacity>
          </RN.View>

          <Spacing height={normalizeHeight(100)} />
          <RN.TouchableOpacity style={styles.button} activeOpacity={0.5}>
            <RN.Text style={styles.buttonText}>Generate more</RN.Text>
          </RN.TouchableOpacity>
          <Spacing steps={2} />
        </RN.ScrollView>
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
  backButton: {
    position: "absolute",
    top: 7,
    zIndex: 2,
  },
  plusButton: {
    right: 0,
  },
  usersScreenshot: {
    height: normalizeHeight(1648),
    width: "100%",
    borderRadius: normalizeWidth(40),
    backgroundColor: COLORS.white,
    justifyContent: "center",
  },
  usersScreenshotText: {
    fontSize: normalizeHeight(100),
    color: COLORS.black,
    fontFamily: SourceSansProFonts.SourceSansPro_400,
    textAlign: "center",
  },
  warning: {
    fontSize: normalizeHeight(65),
    color: COLORS.white,
    fontFamily: SourceSansProFonts.SourceSansPro_400,
  },
  whiteForm: {
    backgroundColor: "#E0E0E0",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: normalizeHeight(65),
    paddingHorizontal: normalizeWidth(50),
    borderRadius: normalizeWidth(40),
    shadowColor: COLORS.white,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 6,
    marginHorizontal: 10,
  },
  whiteFormDescription: {
    color: COLORS.black,
    flex: 1,
  },
  whiteFormCopyIcon: {
    marginRight: 14,
    alignItems: "center",
  },
  whiteFormCopyIconText: {
    fontSize: normalizeHeight(40),
    fontFamily: SourceSansProFonts.SourceSansPro_300,
    color: COLORS.black,
  },
  button: {
    backgroundColor: COLORS.green2,
    padding: normalizeHeight(53),
    borderRadius: 15,
    width: "90%",
    shadowColor: COLORS.green2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 6,
    alignSelf: "center",
  },
  buttonText: {
    fontSize: normalizeHeight(65),
    color: COLORS.white,
    fontFamily: SourceSansProFonts.SourceSansPro_700,
  },
});
