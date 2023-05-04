import { render, screen } from "../../test-utils";
import { MuiMode } from "./muiMode";

describe("MuiMode", () => {
  test("renders correctly", () => {
    // render(<MuiMode />);
    // Mui component does not have the wrapper provider in the test environment, so it gives "light mode"
    // as output
    render(<MuiMode />);
    const headingElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(headingElement).toHaveTextContent("dark mode");
  });
});
