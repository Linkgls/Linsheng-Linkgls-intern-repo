// src/components/DataFetcher.test.js
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import DataFetcher from "./DataFetcher";

// Mock the global fetch function
global.fetch = jest.fn();

describe("DataFetcher", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test("displays fetched data when API call is successful", async () => {
    // Arrange: Set up the mocked response
    const fakeData = { message: "Hello, World!" };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => fakeData,
    });

    // Act: Render the component
    render(<DataFetcher />);

    // Assert: It should initially show a loading message
    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    // Wait for the fetched data to be displayed
    expect(await screen.findByText(/fetched data/i)).toBeInTheDocument();
    expect(screen.getByText(/hello, world!/i)).toBeInTheDocument();
  });

  test("displays error message when API call fails", async () => {
    // Arrange: Set up the mocked error response
    fetch.mockRejectedValueOnce(new Error("API is down"));

    // Act: Render the component
    render(<DataFetcher />);

    // Wait for the error message to appear
    expect(await screen.findByText(/error/i)).toBeInTheDocument();
    expect(screen.getByText(/api is down/i)).toBeInTheDocument();
  });
});
