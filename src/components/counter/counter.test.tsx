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

  test("renders a count of 10 after clicking the set button", async () => {
    userEvent.setup();
    render(<Counter />);

    const amountInput = screen.getByRole("spinbutton"); // for input fields that takes number
    await userEvent.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);

    const setButton = screen.getByRole("button", { name: "Set" });
    await userEvent.click(setButton);

    const countElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(countElement).toHaveTextContent("10");
  });

  test("elements are focused in the right order", async () => {
    userEvent.setup();
    render(<Counter />);

    const amountInput = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", { name: "Set" });
    const incrementButton = screen.getByRole("button", { name: "Increment" });

    await userEvent.tab();
    expect(incrementButton).toHaveFocus();

    await userEvent.tab();
    expect(amountInput).toHaveFocus();

    await userEvent.tab();
    expect(setButton).toHaveFocus();
  });

  // ---------------- POINTER EVENTS ----------------

  // Convenience API's
  // 1. click()
  // 2. dblClick()
  // 3. tripleClick()
  // 3. hover()
  // 4. unhover()

  // Pointer API's
  // pointer({keys: "[MouseLeft"})

  // ---------------- KEYBOARD EVENTS ----------------

  // Utility API's
  // 1. type()
  // 2. selectOptions()
  // 3. deSelectOptions()
  // 4. upload()

  // Clipboard API's
  // 1. copy()
  // 2. cut()
  // 3. paste()

  // Convenience API's
  // 1. tab()

  // Keyboard API's
  // keyboard("foo") // anything that we type.
});
