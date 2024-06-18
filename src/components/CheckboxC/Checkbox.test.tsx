import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckboxC from ".";

const mockToggleCheckedStatusFunction = jest.fn();

describe("given an checkbox", () => {
  test(`the checkedFunction is called when checked`, async () => {
    const user = userEvent.setup();

    render(<CheckboxC checkToggleFunction={mockToggleCheckedStatusFunction} />);

    const checkbox = screen.getByRole("checkbox");
    await user.click(checkbox);

    expect(checkbox).toBeChecked();
    expect(mockToggleCheckedStatusFunction).toBeCalledTimes(1);
  });

  test(`the uncheckedFunction is called when UNchecked`, async () => {
    const user = userEvent.setup();

    render(<CheckboxC checkToggleFunction={mockToggleCheckedStatusFunction} />);

    const checkbox = screen.getByRole("checkbox");
    await user.click(checkbox);
    await user.click(checkbox);

    expect(checkbox).not.toBeChecked();
    expect(mockToggleCheckedStatusFunction).toBeCalledTimes(2);
  });
});
