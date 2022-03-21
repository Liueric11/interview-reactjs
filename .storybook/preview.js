import "../styles/utilities.css";
import "../styles/homepage.css";
import "../styles/sign-in.css";
import "../styles/sign-up.css";
import "../styles/navbar-log-in.css";
import "../styles/card.css";
import * as nextImage from "next/image";

Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: (props) => <img {...props} />,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
