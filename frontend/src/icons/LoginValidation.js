export function LoginValidation(values) {
    const errors = {};
  
    if (values.email === "") {
      errors.email = "Email is required";
    } else if (!values.email) {
      errors.email = "Email format is invalid";
    }
  
    if (values.password === "") {
      errors.password = "Password is required";
    } else if (!values.password) {
      errors.password =
        "Incorrect Password";
    }

    return errors;
  }
  