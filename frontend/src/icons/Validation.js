export function Validation(values) {
    const errors = {};
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const passPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{9,}$/;
    const phonePattern = /^\d{11}$/;
  
    if (values.name === "") {
      errors.name = "Username is required";
    }
  
    if (values.email === "") {
      errors.email = "Email is required";
    } else if (!emailPattern.test(values.email)) {
      errors.email = "Email format is invalid";
    }
  
    if (values.password === "") {
      errors.password = "Password is required";
    } else if (!passPattern.test(values.password)) {
      errors.password =
        "Password should contain at least one uppercase character (A-Z), one lowercase character (a-z), one digit (0-9), and be at least 9 characters long";
    }
  
    if (values.phone_number === "") {
      errors.phone_number = "Phone number is required";
    } else if (!phonePattern.test(values.phone_number)) {
      errors.phone_number = "Phone number should be a 11-digit number without letters";
    }
  
    return errors;
  }
  