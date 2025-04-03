import { render, screen } from '@testing-library/react'
import Greet from './Greet'

describe('Greet', () => {
  test('renders correctly', () => {
    render(<Greet />)
    const textelement = screen.getByText(/hello/i)
    expect(textelement).toBeInTheDocument()
  })
  test('renders a name', () => {
    render(<Greet name="Divyanshu" />)
    const textElement = screen.getByText('Hello Divyanshu')
    expect(textElement).toBeInTheDocument()
  })
})
