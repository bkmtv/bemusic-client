import { useContext } from "react";
import Header from './components/Header/Header';
import { ThemeContext } from "./Theme";
import './App.css';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <div className="container">
        <Header />
      </div>
    </div>
  );
}

export default App;
