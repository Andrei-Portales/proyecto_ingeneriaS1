import { render, screen } from '@testing-library/react';
import Grados from './Grados';

test('render grados screen', async () => {
  render(<Grados />);

  const gradosText = await screen.findByText('Grados');
  expect(gradosText).toBeInTheDocument();
});


test('text grados options', async () => {
    render(<Grados />);

    const cuarto = await screen.findByText('Cuarto');
    const quitno = await screen.findByText('Quinto');
    const sexto = await screen.findByText('Sexto');

    expect(cuarto).toBeInTheDocument();
    expect(quitno).toBeInTheDocument();
    expect(sexto).toBeInTheDocument();
});
