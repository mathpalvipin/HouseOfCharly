import React from 'react'
import { render, screen, within } from '@testing-library/react'
import App from '../App'

describe('Hero section', () => {
  test('renders hero heading and CTA buttons', () => {
    render(<App />)

    const homeSection = document.querySelector('#home')
    const home = within(homeSection)

    expect(home.getByText(/Authentic Dry Fruits/i)).toBeInTheDocument()
    expect(home.getByRole('link', { name: 'Shop Collection' })).toBeInTheDocument()
    expect(home.getByRole('link', { name: 'Know Our Story' })).toBeInTheDocument()
  })
})
