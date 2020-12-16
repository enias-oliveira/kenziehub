import { AUTHENTICATE_TRUE, AUTHENTICATE_FALSE } from "./types";

export const handleAuthenticateTrue = () => ({
  type: AUTHENTICATE_TRUE,
  authenticatorTrue: true,
});

export const handleAuthenticateFalse = () => ({
  type: AUTHENTICATE_FALSE,
  authenticatorFalse: false,
});
