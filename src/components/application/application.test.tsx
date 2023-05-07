import { render, screen } from '@testing-library/react';
import { Application } from './application';

describe('Application', () => {
  test('Renders correctly', () => {
    render(<Application />);

    const pageHeading = screen.getByRole('heading', {
      //   name: "Job application form",
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    // const sectionHeading = screen.getByRole("heading", { name: "Section 1" });
    const sectionHeading = screen.getByRole('heading', { level: 2 });
    expect(sectionHeading).toBeInTheDocument();

    // getByText() query method --> used for para, div, span

    const paragraphElement = screen.getByText('All fields are mandatory');
    expect(paragraphElement).toBeInTheDocument();

    // getAllByAltText() query method --> used for elements that has alt attributes like image, input, textarea or custom components

    const imageElement = screen.getByAltText('a person with a laptop');
    expect(imageElement).toBeInTheDocument();

    // getByTitle query method --> elements that has matching title attribute

    const closeElement = screen.getByTitle('close');
    expect(closeElement).toBeInTheDocument();

    // getByTestId query method --> returns an element that has matching "data-testid" attr.

    const customElement = screen.getByTestId('custom-element');
    expect(customElement).toBeInTheDocument();

    const inputElement = screen.getByRole('textbox', { name: 'Name' });
    expect(inputElement).toBeInTheDocument();

    // getByLabelText() query method
    const inputElement2 = screen.getByLabelText('Name', {
      selector: 'input', // takes the type of element when encounters more than one with same label
    });
    expect(inputElement2).toBeInTheDocument();

    // getByPlaceholderText() query method
    const inputElement3 = screen.getByPlaceholderText('Fullname');
    expect(inputElement3).toBeInTheDocument();

    // getByDisplayValue() query method
    const inputElement4 = screen.getByDisplayValue('Vaibhav');
    expect(inputElement4).toBeInTheDocument();

    const bioElement = screen.getByRole('textbox', { name: 'Bio' });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole('combobox');
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole('checkbox');
    expect(termsElement).toBeInTheDocument();

    // getByLabelText() query method
    const termsElement2 = screen.getByLabelText(
      'I agree to the terms and conditions'
    );
    expect(termsElement2).toBeInTheDocument();

    const submitBtnElement = screen.getByRole('button');
    expect(submitBtnElement).toBeInTheDocument();
    // expect(submitBtnElement).not.toBeEnabled();

    expect(submitBtnElement).toBeDisabled();
  });
});

// Priority order for query methods

// 1. getByRole
// 2. getByLabelText
// 3. getByPlaceholderText
// 4. getByText
// 5. getByDisplayValue
// 6. getByAltText
// 7. getByTitle
// 8. getByTestId
