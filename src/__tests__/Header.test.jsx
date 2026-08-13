import React from 'react'
import { render, screen, within } from '@testing-library/react'
import App from '../App'

describe('Header', () => {
  test('renders logo and primary navigation links', () => {
    render(<App />)

    const logo = screen.getByAltText(/logo/i)
    expect(logo).toBeInTheDocument()

    const header = document.querySelector('header')
    const nav = within(header)

    expect(nav.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(nav.getByRole('link', { name: 'Products' })).toBeInTheDocument()
    expect(nav.getByRole('link', { name: 'Our Story' })).toBeInTheDocument()
    expect(nav.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })
})
