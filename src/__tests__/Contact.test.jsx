import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('Contact section', () => {
  test('shows phone number and email links', () => {
    render(<App />)

    expect(screen.getByText(/\+91 70150 27484/)).toBeInTheDocument()
    expect(screen.getByText(/Official@houseofcharly.com/i)).toBeInTheDocument()
  })
})
