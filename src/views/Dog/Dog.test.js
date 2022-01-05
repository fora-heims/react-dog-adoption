import Dog from './Dog.js';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';

test('', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/dogs/17']}>
      <Route path="/dogs/:id">
        <Dog />
      </Route>
    </MemoryRouter>
  );
  await screen.findByText('Meet Mrs. Weasley');
  expect(container).toMatchSnapshot();
});
