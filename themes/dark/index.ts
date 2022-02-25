import { extendTheme } from "@chakra-ui/react";
import type { ThemeConfig } from "@chakra-ui/react";
import globalStyles from "themes/shared/globalStyles";

import Button from "./components/button";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  ...globalStyles,
  ...config,
  colors: {
    primary: "#46D9AD",
  },
  components: {
    Button,
  },
});

export default theme;
