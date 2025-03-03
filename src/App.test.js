import { render, screen } from '@testing-library/react';
import App from './App';

test('toggle button in dashboard', () => {
  render(<App />);
  const linkElement = screen.getByTestId('toggle-button');
  expect(linkElement).toBeInTheDocument();
});
