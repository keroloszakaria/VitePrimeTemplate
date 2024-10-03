export const requiredRule = (t, fieldName) => ({
  required: true,
  message: t("VALIDATION.REQUIRED_FIELD", { field: fieldName }),
});

export const minLengthRule = (
  t,
  min,
  message = t(`VALIDATION.MIN_LENGTH`, { min })
) => ({
  min,
  message,
});

export const emailPatternRule = (
  t,
  message = t("VALIDATION.INVALID_EMAIL")
) => ({
  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  message,
});

export const phonePatternRule = (
  t,
  message = t("VALIDATION.INVALID_PHONE")
) => ({
  pattern: /^\+2\d{11}$/,
  message,
});
