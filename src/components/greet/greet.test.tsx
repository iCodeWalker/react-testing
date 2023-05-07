import { render, screen } from '@testing-library/react';
import Greet from './greet';

test('Greet renders correclty', () => {
  render(<Greet />);
  const textElement = screen.getByText('Hello');
  expect(textElement).toBeInTheDocument();
});
