import { useContext } from "react";
import { ThemeContext } from "../../shared/context/ThemeContext";
import * as Icon from "react-bootstrap-icons";

export default function ToggleLocale() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <button onClick={() => toggleTheme()}>
          {theme === "dark-theme" ? <Icon.BrightnessHigh /> : <Icon.MoonStars />}
        </button>
    )
}