import './App.css';
import { useTheme } from './context/ThemeContext';

function App() {
  const { isDarkTheme, theme, toggleTheme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <header className="header">
        <h1>{isDarkTheme ? 'Темная тема' : 'Светлая тема'}</h1>
        <button onClick={toggleTheme}>Сменить тему</button>
      </header>
    </div>
  );
}

export default App;
