import { useContext } from "react";
import { ThemeContext } from "../../Theme";
import * as Icon from "react-bootstrap-icons";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
    <div className="row pt-5">
      <div className="col-6 h4"><Icon.Collection /> Collections</div>
      <div className="col-4 text-center">
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search"/>
          <button className="btn btn-light" type="submit"><Icon.Search /></button>
        </form>
      </div>
      <div className="col-1 header__toggle h4 text-center">
        <button><Icon.Translate /></button>
      </div>
      <div className="col-1 header__toggle h4 text-center">
        <button onClick={() => toggleTheme()}>
          {theme === "dark-theme" ? <Icon.BrightnessHigh /> : <Icon.MoonStars />}
        </button>
      </div>
    </div>
    </>
  )
}

export default Header;