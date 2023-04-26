// Greet should render the text hello and if a name is passed into the component,
// It should render hello followed by the name

import { render, screen } from "@testing-library/react";
import GreetUser from "./greetUser";

// test("Greet renders correctly", () => {
//   render(<GreetUser />);
//   const textElement = screen.getByText("Hello");
//   expect(textElement).toBeInTheDocument();
// });

// To run a specific test
// --> test.only("Greet render with name", () => {
// then only this test is going to run from this file

// To skip a specfic test
// --> test.skip("Greet render with name", () => {
// using skip --> than this test will be skipped

// test("Greet render with name", () => {
//   render(<GreetUser name="Vaibhav" />);

//   const textElement = screen.getByText("Hello Vaibhav");
//   expect(textElement).toBeInTheDocument();
// });

// Grouping tests

// 1. describe method is used to group tests together.
// 2. can use .skip or .only with describe method
// 3 .decribe can be nested.
// 4. can add multiple describe blocks inside a single file

describe("Greet", () => {
  test("renders correctly", () => {
    render(<GreetUser />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });

  test("render with name", () => {
    render(<GreetUser name="Vaibhav" />);

    const textElement = screen.getByText("Hello Vaibhav");
    expect(textElement).toBeInTheDocument();
  });

  // --> Nested describe method

  //   describe("Nested", () => {
  //     test("render with name", () => {
  //       render(<GreetUser name="Vaibhav" />);

  //       const textElement = screen.getByText("Hello Vaibhav");
  //       expect(textElement).toBeInTheDocument();
  //     });
  //   });
});

// --> Alternative of test method is "it"

//   it("render with name", () => {
//     render(<GreetUser name="Vaibhav" />);

//     const textElement = screen.getByText("Hello Vaibhav");
//     expect(textElement).toBeInTheDocument();
//   });

// --> To replicate test.only we can use "fit" == focuses on a particular test
// --> To replicate test.skip we can use "xit" == skips or excludes a particular test
