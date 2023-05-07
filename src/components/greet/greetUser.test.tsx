// Greet should render the text hello and if a name is passed into the component,
// It should render hello followed by the name

import { render, screen } from '@testing-library/react';
import GreetUser from './greetUser';

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

describe('Greet', () => {
  test('renders correctly', () => {
    render(<GreetUser />);
    const textElement = screen.getByText('Hello');
    expect(textElement).toBeInTheDocument();
  });

  test('render with name', () => {
    render(<GreetUser name="Vaibhav" />);

    const textElement = screen.getByText('Hello Vaibhav');
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

// ---------------------------------------------------------------------------

// --> Code Coverage

// Code Coverage is a metric that helps to understand how much the software is tested.
// 1. Statement Coverage
// 2. Branch Coverage
// 3. Code Coverage
// 4. Function Coverage

// yarn coverage = to view coverage report

// --> Assertions

// 1. When writing test, we often need to check that values meet certain conditions.
// 2. Assertions decide if a test passes or fails.
// 3. Assertion is carried out with expect() method.

// except(value).matcherFucntions()

// --> What to test

// Fundamentals to test react

// 1. Test if the component renders.
// 2. Test if the component renders correctly with the props.
// 3. Test if the component renders in different states.
// 4. Test if the components react to events.

// --> What not to test

// 1. Third party code (extermal library).
// 2. Code that is not important from the user point of view.

// RTL Queries

// Queries are the methods that Testing Library provides to find elements on the page.

// To find single element on the page, we have
// 1. getBy..
// 2. queryBy..
// 3. findBy..

// To find multiple element on the page, we have
// 1. getAllBy..
// 2. queryAllBy..
// 3. findAllBy..

// All these methods need to be combined with a suffix to be an actual query

// The suffix can be, Role, LabelText, PlaceholderText, Text, DisplayValue, AltText, Title and TestId.

// getBy.. class of queries returns the matching node for the query, and throws a descriptive error
// if no elements match or if more than one match is found.
