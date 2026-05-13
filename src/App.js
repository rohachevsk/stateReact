import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    isDarkTheme: false,
  };

  toggleTheme = () => {
    this.setState((prevState) => ({
      isDarkTheme: !prevState.isDarkTheme,
    }));
  };

  render() {
    const { isDarkTheme } = this.state;
    const themeClass = isDarkTheme ? 'dark' : 'light';

    return (
      <div className={`App ${themeClass}`}>
        <header className="header">
          <h1>{isDarkTheme ? 'Темная тема' : 'Светлая тема'}</h1>
          <button onClick={this.toggleTheme}>Сменить тему</button>
        </header>
      </div>
    );
  }
}

export default App;
