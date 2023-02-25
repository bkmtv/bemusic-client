import "./App.css";
import { useContext } from "react";

import { LocaleContext } from "@context/LocaleContext";
import { ThemeContext } from "@context/ThemeContext";
import { UserProvider } from "@context/UserContext";
import { IntlProvider } from "react-intl";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/header/Header";
import AppRoutes from "../shared/routes/AppRoutes";

function App() {
  const { theme } = useContext(ThemeContext);
  const { locale, messages } = useContext(LocaleContext);

  return (
    <IntlProvider messages={messages} locale={locale}>
      <BrowserRouter>
        <UserProvider>
          <div className={`App ${theme}`}>
            <div className="container px-4 pt-5">
              <Header />
              <AppRoutes />
            </div>
          </div>
        </UserProvider>
      </BrowserRouter>
    </IntlProvider>
  );
}

export default App;
