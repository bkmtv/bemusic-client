import { useContext } from "react";
import { ThemeContext } from "../../shared/context/ThemeContext";
import * as Icon from "react-bootstrap-icons";

export default function ToggleLocale() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <button className="px-3" onClick={() => toggleTheme()}>
          {theme === "dark-theme" ? <Icon.MoonStars /> : <Icon.BrightnessHigh />}
        </button>
    )
}