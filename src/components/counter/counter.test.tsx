import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./counter";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(countElement).toBeInTheDocument();

    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    expect(incrementButton).toBeInTheDocument();
  });

  test("renders a count of 0 by default", () => {
    render(<Counter />);

    const countElement = screen.getByRole("heading", {
      level: 1,
    });

    expect(countElement).toHaveTextContent("0");
  });

  test("renders a count of 1 after clicking the increment button", async () => {
    // create an instance of a user event
    userEvent.setup();
    render(<Counter />);

    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });

    // all user-event apis are asynchrnous

    await userEvent.click(incrementButton);

    const countElement = screen.getByRole("heading", {
      level: 1,
    });

    expect(countElement).toHaveTextContent("1");
  });

  test("renders a count of 2 after clicking the increment button twice", async () => {
    // create an instance of a user event
    userEvent.setup();
    render(<Counter />);

    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });

    // all user-event apis are asynchrnous

    await userEvent.click(incrementButton);
    await userEvent.click(incrementButton);

    const countElement = screen.getByRole("heading", {
      level: 1,
    });

    expect(countElement).toHaveTextContent("2");
  });
});
