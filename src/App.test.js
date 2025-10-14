import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import App from "./App";

// 1. Simple math test
describe("Addition", () => {
  it("knows that 2 and 2 make 4", () => {
    expect(2 + 2).toBe(4);
  });
});

// 2. Render test
describe("App component", () => {
  it("should render App component correctly", () => {
    render(<App />);
  });

  // 3. Check for text
  it("should find text element", () => {
    render(<App />);
    const textElement = screen.getByText("Register Form");
    expect(textElement).toBeInTheDocument();
  });

  // 4. Check for input element
  it("should find input element", () => {
    render(<App />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  // 5. Check button click
  it("should show error messages when all fields are not entered", () => {
    render(<App />);
    const btnElement = screen.getByRole("button");
    userEvent.click(btnElement);
    // For now, no error message is implemented, but this simulates the click
  });

  // 6. Snapshot test
  it("performs snapshot testing", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
