import { CSSProperties } from "react";
import Color from "../types/Color";
import Colors from "../config/ColorPalette";

export const getColors = (color: Color) => {
  let foregroundColor: Color;

  if (color === "DARK") foregroundColor = "LIGHT";
  else foregroundColor = "DARK";

  return {
    backgroundColor: (Colors as any)[color.toLowerCase()],
    color: (Colors as any)[foregroundColor.toLowerCase()],
  } as CSSProperties;
};
