import React from 'react'
import { render, screen, within } from '@testing-library/react'
import App from '../App'

describe('Story section', () => {
  test('renders Our Story heading and description', () => {
    render(<App />)

    const storySection = document.querySelector('#story')
    const story = within(storySection)

    expect(story.getByText(/Our Story/i)).toBeInTheDocument()
    expect(story.getByText(/House of Charly began/i)).toBeInTheDocument()
  })
})
