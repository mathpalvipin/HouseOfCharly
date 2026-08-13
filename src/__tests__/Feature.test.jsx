import React from 'react'
import { render, screen, within } from '@testing-library/react'
import App from '../App'

describe('Feature badges', () => {
  test('renders key feature badges on the hero', () => {
    render(<App />)

    const homeSection = document.querySelector('#home')
    const home = within(homeSection)

    expect(home.getByText(/Direct from Jammu/i)).toBeInTheDocument()
    expect(home.getByText(/No Artificial Processing/i)).toBeInTheDocument()
    expect(home.getByText(/Premium Quality/i)).toBeInTheDocument()
  })
})
