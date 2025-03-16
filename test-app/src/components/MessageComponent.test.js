// src/components/MessageComponent.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MessageComponent from "./MessageComponent";

describe("MessageComponent", () => {
  test("renders the initial message", () => {
    render(<MessageComponent />);
    const messageElement = screen.getByText(/Hello, Focus Bear!/i);
    expect(messageElement).toBeInTheDocument();
  });

  test("changes message and shows clicked feedback on button click", () => {
    render(<MessageComponent />);

    // Verify initial state
    expect(screen.getByText(/Hello, Focus Bear!/i)).toBeInTheDocument();

    // Simulate user clicking the button
    const button = screen.getByRole("button", { name: /click me/i });
    fireEvent.click(button);

    // Verify that the message changes after clicking the button
    expect(screen.getByText(/Button was clicked!/i)).toBeInTheDocument();

    // Verify that additional feedback is rendered
    const feedback = screen.getByTestId("clicked-message");
    expect(feedback).toBeInTheDocument();
  });
});
