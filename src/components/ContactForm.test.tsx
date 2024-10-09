import { render, screen } from '@testing-library/react'
import ContactForm from './ContactForm'

describe('ContactForm', () => {
  it('should', () => {
    render(<ContactForm />)
    const button  = screen.getByRole("button")
    expect(button).toBeInTheDocument
  })
})