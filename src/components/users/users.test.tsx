import { render, screen } from "@testing-library/react";
import { Users } from "./users";

describe("Users API call", () => {
  test("renders correctly", () => {
    render(<Users />);
    const textElement = screen.getByRole("heading", {
      level: 1,
    });

    expect(textElement).toBeInTheDocument();
  });
});
