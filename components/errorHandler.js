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
    case "auth/too-many-requests":
      return "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.";
    default:
      return "An unexpected error occurred. Please try again.";
  }
};
