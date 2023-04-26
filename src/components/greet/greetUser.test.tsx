// Greet should render the text hello and if a name is passed into the component,
// It should render hello followed by the name

import { render, screen } from "@testing-library/react";
import GreetUser from "./greetUser";

test("Greet renders correctly", () => {
  render(<GreetUser />);
  const textElement = screen.getByText("Hello");
  expect(textElement).toBeInTheDocument();
});

test("Greet render with name", () => {
  render(<GreetUser name="Vaibhav" />);

  const textElement = screen.getByText("Hello Vaibhav");
  expect(textElement).toBeInTheDocument();
});
