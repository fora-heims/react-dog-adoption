import { Dogs } from './Dogs.js';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

test.skip('', async () => {
  const { container } = render(
    <MemoryRouter>
      <Dogs />
    </MemoryRouter>
  );
  await screen.findByText('Mrs. Weasley');
  expect(container).toMatchSnapshot();
});
