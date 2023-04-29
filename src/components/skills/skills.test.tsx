// Query multiple elements

import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";

// Find Multiple elements in the dom
// getAllBy --> returns an array of all matching nodes for a query,
// and throws an error if no elements matches

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JavaScript"];
  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("render list of screens", () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skills.length);
  });
});
