import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('Products', () => {
  test('renders product cards for each product', () => {
    render(<App />)

    // Products are rendered as semantic articles
    const productCards = screen.getAllByRole('article')
    expect(productCards.length).toBeGreaterThanOrEqual(1)

    // Check product names
    expect(screen.getByText(/Premium Cashews/i)).toBeInTheDocument()
    expect(screen.getByText(/California Almonds/i)).toBeInTheDocument()
  })
})
