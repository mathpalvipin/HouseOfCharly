import React from 'react'
import { render, screen, within } from '@testing-library/react'
import App from '../App'

describe('Process steps', () => {
  test('renders process steps titles', () => {
    render(<App />)

    const processSection = document.querySelector('#process')
    const process = within(processSection)

    expect(process.getByText('Farm')).toBeInTheDocument()
    expect(process.getByText('Selection')).toBeInTheDocument()
    expect(process.getByText('Quality Check')).toBeInTheDocument()
    expect(process.getByText('Packing')).toBeInTheDocument()
    expect(process.getByText('Your Home')).toBeInTheDocument()
  })
})
