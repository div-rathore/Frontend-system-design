import { render, screen } from "@testing-library/react";
import { Counter } from "./counter";
import user from "@testing-library/user-event";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: /increment/i });
    expect(incrementButton).toBeInTheDocument();
  });
  test("renders a count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });
  test("renders a count of 1 after clicking increment button", async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: /increment/i });
    await user.click(incrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });
  test("renders a count of 2 after clicking increment button twice", async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: /increment/i });
    await user.dblClick(incrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("2");
  });
  test("renders a count of 10 after clicking the set button", async () => {
    user.setup();
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    await user.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);
    const countHeading = screen.getByRole("heading");
    const setButton = screen.getByRole("button", { name: /set/i });
    await user.click(setButton);
    expect(countHeading).toHaveTextContent("10");
  });

  test("elements are focused in the right order", async () => {
    user.setup();
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", { name: /set/i });
    const incrementButton = screen.getByRole("button", { name: /increment/i });
    await user.tab();
    expect(incrementButton).toHaveFocus();
    await user.tab();
    expect(amountInput).toHaveFocus();
    await user.tab();
    expect(setButton).toHaveFocus();
  });
});
