import Dog from './Dog.js';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';

test('', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/dogs/1']}>
      <Route path="/dogs/:id">
        <Dog />
      </Route>
    </MemoryRouter>
  );
  await screen.findByText('Meet Dragon');
  expect(container).toMatchSnapshot();
});
