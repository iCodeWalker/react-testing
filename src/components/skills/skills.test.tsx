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

  test("render login button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginButton).toBeInTheDocument();
  });

  // to ensure that start learning(or an element) is not rendered(or not present) in the DOM.

  test("start learning button not rendered", () => {
    render(<Skills skills={skills} />);

    // const startlearningButton = screen.getByRole("buttton", {
    //   name: "Start Learning",
    // });

    // getRoleBy gives an error if the element is not present.

    // So for this use case we use queryBy
    const startlearningButton = screen.queryByRole("buttton", {
      name: "Start learning",
    });

    // queryBy:
    // 1. Returns the matching node for a query, and return null if no elements match
    // 2. Useful for asserting an element that is not present.
    // 3. Throws an error if more than one element is found.

    // queryAllBy:
    // 1. Returns an array of all matching nodes for a query, and return an empty array if no element match

    expect(startlearningButton).not.toBeInTheDocument();
  });

  // Appearence and disappearence of HTML elements

  // Elements that are not present in the DOM to begin but make their way into the DOM
  // After some time.

  // For example, data that is fetched from a server will be rendered only after a few milliseconds.

  test("start learning button is eventually displayed", async () => {
    render(<Skills skills={skills} />);
    // const startlearningButton = screen.getByRole('button', {
    //     name: "Start learning"
    // });
    // getByRole does not wait for the element to appear on the screen

    // findBy:

    // 1. Returns a promise which resolves when an element is found which matches the given query.
    // 2. The promise is rejected if no element is found or if more than one element is found
    // after a default timeout of 1000ms

    // findAllBy:

    // 1. Returns a promise which resolves to an array of elements when any elements are found
    // which matches the given query

    const startlearningButton = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      }
      //   {
      //     timeout: 2000, // can add timeout
      //   }
    );

    expect(startlearningButton).toBeInTheDocument();
  });
});
