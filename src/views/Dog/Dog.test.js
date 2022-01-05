import { Dog } from './Dog.js';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';

test.skip('', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/dogs/17']}>
      <Route path="/dogs/:id">
        <Dog />
      </Route>
    </MemoryRouter>
  );
  await screen.findByText('Mrs. Weasley');
  expect(container).toMatchSnapshot();
});
