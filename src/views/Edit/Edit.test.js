import Edit from './Edit.js';
import { MemoryRouter, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

test('', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/dogs/1/edit']}>
      <Route path="/dogs/:id/edit">
        <Edit />
      </Route>
    </MemoryRouter>
  );
  await screen.findByText(
    "Please don't mess with Dragon. It might break this site (snapshot testing)."
  );
  expect(container).toMatchSnapshot();
});
