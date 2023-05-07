import { render, screen } from '@testing-library/react';
import { Users } from './users';
import { server } from '../../mocks/server';
import { rest } from 'msw';

describe('Users API call', () => {
  test('renders correctly', () => {
    render(<Users />);
    const textElement = screen.getByRole('heading', {
      level: 1,
    });

    expect(textElement).toBeInTheDocument();
  });

  test('renders a list of users', async () => {
    render(<Users />);
    const users = await screen.findAllByRole('listitem');
    expect(users).toHaveLength(4);
  });

  // test for error in api call
  test('renders error', async () => {
    // we need to reset the handler that we defined in the main file to throw an error
    // for that we need to get hold of server from server.ts
    server.use(
      rest.get(
        'https://jsonplaceholder.typicode.com/users',
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );

    // after reseting the handler, reders the user component

    render(<Users />);
    const errorText = await screen.findByText('Error fetching users');
    expect(errorText).toBeInTheDocument();
  });
});

// To tell our tests to use Mock service worker(msw)
