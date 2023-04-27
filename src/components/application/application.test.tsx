import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("Application", () => {
  test("Renders correctly", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", {
      //   name: "Job application form",
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    // const sectionHeading = screen.getByRole("heading", { name: "Section 1" });
    const sectionHeading = screen.getByRole("heading", { level: 2 });
    expect(sectionHeading).toBeInTheDocument();

    const inputElement = screen.getByRole("textbox", { name: "Name" });
    expect(inputElement).toBeInTheDocument();

    const inputElement2 = screen.getByLabelText("Name", {
      selector: "input", // takes the type of element when encounters more than one with same label
    });
    expect(inputElement2).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", { name: "Bio" });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsElement2).toBeInTheDocument();

    const submitBtnElement = screen.getByRole("button");
    expect(submitBtnElement).toBeInTheDocument();
  });
});
