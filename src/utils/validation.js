export const validateField = (value, rules) => {
  if (!Array.isArray(rules)) {
    return null; // No validation if rules is not an array
  }

  for (const rule of rules) {
    if (rule.required && !value) {
      return rule.message;
    }
    if (rule.min && value.length < rule.min) {
      return rule.message;
    }
    if (rule.pattern && !rule.pattern.test(value)) {
      return rule.message;
    }
  }
  return null;
};
