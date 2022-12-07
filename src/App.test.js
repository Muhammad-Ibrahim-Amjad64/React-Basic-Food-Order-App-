import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// redner method se App component ko rendeer kia
// Screen method se We created virtual broser for testing and identifies element that is renders insode of it by the text "learn react" for example in that case 