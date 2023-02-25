import { useEffect, createContext, useState } from "react";
import English from "@lang/en.json";
import Russian from "@lang/ru.json";

const LocaleContext = createContext();

const getLocale = () => {
  const locale = localStorage.getItem("locale");
  if (!locale) {
    localStorage.setItem("locale", "en");
    return "en";
  } else {
    return locale;
  }
};

const getMessages = () => {
  const locale = localStorage.getItem("locale");
  if (locale === "en") {
    return English;
  } else {
    return Russian;
  }
};

const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState(getLocale);
  const [messages, setMessages] = useState(getMessages);
  function toggleLocale() {
    if (locale === "en") {
      setLocale("ru");
      setMessages(Russian);
    } else {
      setLocale("en");
      setMessages(English);
    }
  }

  useEffect(() => {
    const refreshLocale = () => {
      localStorage.setItem("locale", locale);
    };
    refreshLocale();
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, messages, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export { LocaleContext, LocaleProvider };
