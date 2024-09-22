export const handleAuthError = (error) => {
  switch (error.code) {
    case "auth/invalid-email":
      return "The email address is invalid.";
    case "auth/user-disabled":
      return "The user account has been disabled.";
    case "auth/user-not-found":
      return "No user found with this email.";
    case "auth/wrong-password":
      return "Incorrect password. Please try again.";
    case "auth/email-already-in-use":
      return "The email address is already in use by another account.";
    case "auth/weak-password":
      return "Password should be at least 6 characters.";
    case "auth/invalid-credential":
      return "Incorrect email/password. Please try again.";
    default:
      return "An unexpected error occurred. Please try again.";
  }
};
