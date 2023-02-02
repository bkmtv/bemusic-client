import { useContext } from "react";
import Header from './app/header/Header';
import { ThemeContext } from "./shared/context/ThemeContext";
import { LocaleContext } from "./shared/context/LocaleContext";
import { IntlProvider } from "react-intl";
import './App.css';

function App() {
  const { theme } = useContext(ThemeContext);
  const { locale, messages } = useContext(LocaleContext);
  
  return (
    <IntlProvider messages={messages} locale={locale}>
      <div className={`App ${theme}`}>
        <div className="container-lg p-5">
          <Header />
        </div>
      </div>
    </IntlProvider>
  );
}

export default App;
