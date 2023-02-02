import './App.css';
import { useContext } from "react";
import Header from './app/header/Header';
import { ThemeContext } from "./shared/context/ThemeContext";
import { LocaleContext } from "./shared/context/LocaleContext";
import { IntlProvider } from "react-intl";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./common/routes/AppRoutes";

function App() {
  const { theme } = useContext(ThemeContext);
  const { locale, messages } = useContext(LocaleContext);
  
  return (
    <IntlProvider messages={messages} locale={locale}>
      <BrowserRouter>
        <div data-bs-theme="dark" className={`App ${theme}`}>
          <div className="container-lg p-5">
            <Header />
            <AppRoutes />
          </div>
        </div>
      </BrowserRouter>
    </IntlProvider>
  );
}

export default App;