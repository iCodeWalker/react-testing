import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // --> render() creates a virtual dom of App component

  // const linkElement = screen.getByText(/learn react/i);

  // -->  screen is an object that contains methods to query the virtual dom
  // expect(linkElement).toBeInTheDocument();
});

// --> test and expect are the methods provided by jest that is accessable in all .test files
// --> we don't have to import it. It is accessable globally
