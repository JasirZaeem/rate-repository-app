import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: "#24292E",
    textSecondary: "#586069",
    textLight: "#FFFFFF",
    textDanger: "#d73a4a",
    primary: "#0366D6",
    backgroundDark: "#24292E",
    backgroundGrey: "#E1E4E8",
    backgroundLight: "#FFFFFF",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: "Roboto",
      ios: "Arial",
      default: "System",
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

export default theme;
