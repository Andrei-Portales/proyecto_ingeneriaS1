import { render, screen } from '@testing-library/react';
import LoginForm from './LoginForm';


test('render login form', async () => {
  render(<LoginForm />);

  const registro = await screen.findByText('Registrarse');
  const olvContr = await screen.findByText('¿Olvido contraseña?');
  const emailPlaceHolder = await screen.findByPlaceholderText('Correo')
  const passwordPlaceHolder = await screen.findByPlaceholderText('Contraseña')

  expect(registro).toBeInTheDocument();
  expect(olvContr).toBeInTheDocument();
  expect(emailPlaceHolder).toBeInTheDocument();
  expect(passwordPlaceHolder).toBeInTheDocument();

});
