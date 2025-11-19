export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

export const validatePassword = (password, minLength = 6) => {
  return password && password.length >= minLength;
};

export const validateRequired = (value) => {
  return value && value.trim().length > 0;
};

export const getValidationError = (fieldName, value, type = 'required') => {
  if (!validateRequired(value)) {
    return `${fieldName} is required`;
  }

  if (type === 'email' && !validateEmail(value)) {
    return 'Please enter a valid email address';
  }

  if (type === 'password' && !validatePassword(value)) {
    return 'Password must be at least 6 characters';
  }

  return '';
};

export const validateForm = (fields, rules) => {
  const errors = {};

  Object.keys(rules).forEach((fieldName) => {
    const value = fields[fieldName];
    const rule = rules[fieldName];

    const error = getValidationError(
      fieldName.charAt(0).toUpperCase() + fieldName.slice(1),
      value,
      rule
    );

    if (error) {
      errors[fieldName] = error;
    }
  });

  return errors;
};
