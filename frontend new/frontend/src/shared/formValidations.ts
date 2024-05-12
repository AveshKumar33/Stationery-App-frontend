class FormValidations {

  static isValidEmail(value: string): string | boolean {
    if (value.trim() === '') {
      return 'Email is required';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) || 'Invalid email address';
  }

  static isValidPassword(value: string): string | boolean {
    if (value.trim() === '') {
      return 'Password is required';
    }
    return true
  //   value.trim().length >= 8 || 'Password should be at least 8 characters';
  }
  
  static isValidFirstName(value: string): string | boolean {
    if (value.trim() === '') {
      return 'First name is required';
    }
    return true;
  }

  static isValidLastName(value: string): string | boolean {
    if (value.trim() === '') {
      return 'Last name is required';
    }
    return true;
  }

  static validateField(fieldName: string, value: string): string | boolean {
    if (fieldName === 'firstName') return FormValidations.isValidFirstName(value);
    if (fieldName === 'lastName') return FormValidations.isValidLastName(value);
    if (fieldName === 'email') return FormValidations.isValidEmail(value);
    if (fieldName === 'password') return FormValidations.isValidPassword(value);

    return true;
  }
  
  static validateEmail(email: string): string | boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
       return "Email is required.";
    } else if (!emailRegex.test(email)) {
        return "Invalid email address.";
    }
      return false;
  }
  
  static validatePassword(password: string): string | boolean {
      if (!password.trim()) {
        return "Password is required.";
     }
      return false;
  }

  static validateLoginForm(email: string, password: string): { emailError: string | boolean; passwordError: string | boolean } {
    const emailError = this.validateEmail(email);
    const passwordError = this.validatePassword(password);
      return { emailError, passwordError };
    }
  }
  export default FormValidations;
  