import { render, screen } from '@testing-library/react';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';

test('renders light theme title', () => {
  render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );

  const titleElement = screen.getByText(/Светлая тема/i);
  expect(titleElement).toBeInTheDocument();
});
