import Admin from './Admin.js';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

test('', async () => {
  const { container } = render(
    <MemoryRouter>
      <Admin />
    </MemoryRouter>
  );
  await screen.findByText('Enter Dog Details');
  expect(container).toMatchSnapshot();
});
