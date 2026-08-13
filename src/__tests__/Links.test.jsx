import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('External links', () => {
  test('external links open in new tab with noopener noreferrer', () => {
    render(<App />)

    const orderNow = screen.getByRole('link', { name: /order now/i })
    expect(orderNow).toHaveAttribute('target', '_blank')
    expect(orderNow).toHaveAttribute('rel', 'noopener noreferrer')

    const shopNowButtons = screen.getAllByRole('link', { name: /shop now/i })
    shopNowButtons.forEach((btn) => {
      expect(btn).toHaveAttribute('target', '_blank')
      expect(btn).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })
})
