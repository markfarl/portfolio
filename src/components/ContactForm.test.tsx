import { render, screen } from '@testing-library/react'
import ContactForm from './ContactForm'

describe('ContactForm', () => {
  it('should', () => {
    render(<ContactForm />)
    expect(screen.getByRole("button")).toBeInTheDocument()
  });
})