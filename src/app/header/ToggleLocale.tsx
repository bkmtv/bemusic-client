import { useContext } from "react";
import { LocaleContext } from "../../shared/context/LocaleContext";
import * as Icon from "react-bootstrap-icons";

export default function ToggleLocale() {
    const { locale, toggleLocale } = useContext(LocaleContext);
    return (
      <div className="toggle-locale">
        <button onClick={() => toggleLocale()}>
          {locale === "en" ? <span><Icon.GlobeAmericas /> en</span> : <span><Icon.GlobeCentralSouthAsia /> ru</span>}
        </button>
      </div>
  )
}