import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  test('renders header logo and Order Now button', () => {
    render(<App />)
    const logo = screen.getByAltText(/logo/i)
    expect(logo).toBeInTheDocument()

    const orderNow = screen.getByRole('link', { name: /order now/i })
    expect(orderNow).toBeInTheDocument()
  })
})
