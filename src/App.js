import { useState } from 'react';
import './App.css';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  const themeClass = isDarkTheme ? 'dark' : 'light';

  return (
    <div className={`App ${themeClass}`}>
      <header className="header">
        <h1>{isDarkTheme ? 'Темная тема' : 'Светлая тема'}</h1>
        <button onClick={toggleTheme}>Сменить тему</button>
      </header>
    </div>
  );
}

export default App;
