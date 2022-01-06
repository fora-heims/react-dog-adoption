import Dogs from './Dogs.js';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

test('', async () => {
  const { container } = render(
    <MemoryRouter>
      <Dogs />
    </MemoryRouter>
  );
  await screen.findByText('Meet Dragon');
  expect(container).toMatchSnapshot();
});
