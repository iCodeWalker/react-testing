import { render, screen } from "@testing-library/react";
import { CounterTwo } from "./counterTwo";
import userEvent from "@testing-library/user-event";

describe("Counter Two", () => {
  test("renders correctly", () => {
    render(<CounterTwo count={0} />);
    const textElement = screen.getByText("Counter Two");
    expect(textElement).toBeInTheDocument();
  });

  test("handlers are called", async () => {
    userEvent.setup();
    // Mock functions using jest

    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();

    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />
    );

    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });

    const decrementButton = screen.getByRole("button", {
      name: "Decrement",
    });

    await userEvent.click(incrementButton);
    await userEvent.click(decrementButton);

    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
