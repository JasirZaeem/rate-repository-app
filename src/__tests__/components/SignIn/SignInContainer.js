import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import SignInContainer from "../../../components/SignIn/SignInContainer";

describe("SignIn", () => {
  describe("SignInContainer", () => {
    it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
      const onSubmit = jest.fn();

      const { getByTestId } = render(<SignInContainer onSubmit={onSubmit} />);

      const passwordField = getByTestId("passwordField");
      const usernameField = getByTestId("usernameField");
      const submitButton = getByTestId("submitButton");

      fireEvent.changeText(usernameField, "username");
      fireEvent.changeText(passwordField, "password");
      fireEvent.press(submitButton);

      await waitFor(() => {
        // expect the onSubmit function to have been called once and with a correct first argument
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: "username",
          password: "password",
        });
      });
    });
  });
});
