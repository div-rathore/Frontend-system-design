import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe('application', ()=>{
    test('renders correctly', ()=>{
        render(<Application/>);
       const nameElement =  screen.getByPlaceholderText('Fullname');
       expect(nameElement).toBeInTheDocument();

       const jobLocationElement = screen.getByRole('combobox')
       expect(jobLocationElement).toBeInTheDocument()

       const submitButtonElement = screen.getByRole('button')
       expect(submitButtonElement).toBeInTheDocument()
    })
})