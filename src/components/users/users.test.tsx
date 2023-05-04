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

  test("renders a list of users", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(4);
  });
});

// To tell our tests to use Mock service worker(msw)
