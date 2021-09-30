import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Grado from './Grado';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: BrowserRouter });
};

test('render grado screen', async () => {
  const route = '/grados/cuarto';

  renderWithRouter(<Grado grade={'cuarto'}/>, { route });

  const title = await screen.findByText('Materias 4to');

  const opcion1 = await screen.findByText('Matemáticas');
  const opcion2 = await screen.findByText('Ciencias');
  const opcion3 = await screen.findByText('Idioma');

  expect(title).toBeInTheDocument();
  expect(opcion1).toBeInTheDocument();
  expect(opcion2).toBeInTheDocument();
  expect(opcion3).toBeInTheDocument();
});
