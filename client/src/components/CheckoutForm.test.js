import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);

  const header = screen.getByText(/checkout form/i);

  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);

  const firstNameInput = screen.getByLabelText(/first name:/i);
  const lastNameInput = screen.getByLabelText(/last name:/i);
  const addressInput = screen.getByLabelText(/address:/i);
  const cityInput = screen.getByLabelText(/city:/i);
  const stateInput = screen.getByLabelText(/state:/i);
  const zipInput = screen.getByLabelText(/zip:/i);
  const button = screen.getByRole("button");

  fireEvent.change(firstNameInput, {
    target: { value: "split", name: "firstName" },
  });
  fireEvent.change(lastNameInput, {
    target: { value: "bandit", name: "lastName" },
  });
  fireEvent.change(addressInput, {
    target: { value: "123", name: "address" },
  });
  fireEvent.change(cityInput, {
    target: { value: "SF", name: "city" },
  });
  fireEvent.change(stateInput, {
    target: { value: "CA", name: "state" },
  });
  fireEvent.change(zipInput, {
    target: { value: "53403", name: "zip" },
  });

  fireEvent.click(button);

  const success = screen.getByTestId("successMessage");
  expect(success).toBeInTheDocument();

  within(success).getByText(/split bandit/i);
  within(success).getByText(/123/i);
  within(success).getByText(/SF, CA 53403/i);
});
