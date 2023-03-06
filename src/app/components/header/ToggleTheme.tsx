import { useContext } from "react";

import { ThemeContext } from "@context/ThemeContext";
import * as Icon from "react-bootstrap-icons";

export default function ToggleLocale() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={() => toggleTheme()}>
      {theme === "dark" ? <Icon.MoonStars /> : <Icon.BrightnessHigh />}
    </button>
  );
}
