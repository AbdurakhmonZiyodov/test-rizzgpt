import RN from "@/components/RN";
import { normalizeWidth } from "../constants/dimensions";

export const CoreStyle = RN.StyleSheet.create({
  flex1: {
    flex: 1,
  },
  flexGrow1: {
    flexGrow: 1,
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  baseHorizantalPadding: {
    paddingHorizontal: normalizeWidth(80),
  },
});

export const HIT_SLOP = {
  top: 20,
  right: 20,
  bottom: 20,
  left: 20,
};
