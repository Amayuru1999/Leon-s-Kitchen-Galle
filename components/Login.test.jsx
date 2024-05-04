import { render, screen } from '@testing-library/react'
// import Home from 'pages/Home'
import Login from 'pages/Login'
// import { expect } from 'vitest'

test('renders learn react link', () => {
  render(<Login />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// describe('Login', () => {
//   it('should render login button', () => {
//     render(<Login />)

//     const login = screen.getByText(/Login/i);
//     expect(login).toBeInTheDocument();
//     // expect(button).toHaveTextContent(/login/i);
    
//   })
// })