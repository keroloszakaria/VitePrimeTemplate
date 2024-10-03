import {
  requiredRule,
  minLengthRule,
  emailPatternRule,
  phonePatternRule,
} from "@/utils/validationRules";

export const createTextField = ({
  t,
  key,
  label,
  isEmail = false,
  isRequired = true,
  minLength = 3,
  cols = { md: 6, lg: 6 },
}) => ({
  key,
  type: "text",
  label: t(`FIELDS.${label}`),
  placeholder: t(`PLACEHOLDER.${label}`),
  value: "",
  required: isRequired,
  rules: [
    ...(isRequired ? [requiredRule(t, t(`FIELDS.${label}`))] : []),
    ...(minLength ? [minLengthRule(t, minLength)] : []),
    ...(isEmail ? [emailPatternRule(t)] : []),
  ],
  cols: cols,
});

export const createNumberField = ({
  t,
  key,
  label,
  hide = false,
  prefix = "",
  mode,
  currency,
  isRequired = true,
}) => ({
  key,
  type: "number",
  label: t(`FIELDS.${label}`),
  placeholder: t(`PLACEHOLDER.${label}`),
  value: 0,
  required: isRequired,
  rules: [...(isRequired ? [requiredRule(t, t(`FIELDS.${label}`))] : [])],
  cols: { md: 6, lg: 6 },
  hide,
  prefix,
  mode,
  currency,
});

export const createPasswordField = ({
  t, // t must be passed here
  key,
  label,
  isRequired = true,
  cols = { md: 6, lg: 6 },
}) => ({
  key,
  type: "password",
  label: t(`FIELDS.${label}`),
  placeholder: t(`PLACEHOLDER.${label}`), // Use t to translate the placeholder
  value: "",
  required: isRequired,
  rules: [
    ...(isRequired ? [requiredRule(t, t(`FIELDS.${label}`))] : []),
    minLengthRule(t, 6),
  ],
  cols: cols,
});

export const createPhoneField = ({
  t,
  key,
  label,
  isRequired = true,
  cols = { md: 6, lg: 6 },
}) => ({
  key,
  type: "phone",
  label: t(`FIELDS.${label}`),
  placeholder: t(`PLACEHOLDER.${label}`),
  value: "",
  required: isRequired,
  rules: [
    ...(isRequired ? [requiredRule(t, t(`FIELDS.${label}`))] : []),
    phonePatternRule(t),
  ],
  cols: cols,
});

export const createSelectField = ({
  t,
  key,
  label,
  options,
  optionLabel,
  optionValue,
  isMultiple = false,
  hide = false,
  updateValueHandler = null,
  cols = { md: 6, lg: 6 },
  returnObject = false,
  display = "chip",
  minLength = 1,
  isRequired = true,
}) => ({
  key,
  type: isMultiple ? "multiselect" : "select",
  label: t(`FIELDS.${label}`),
  placeholder: t(`PLACEHOLDER.${label}`),
  value: "",
  options,
  optionLabel,
  optionValue,
  hide,
  display,
  returnObject,
  required: isRequired,
  rules: [
    ...(isRequired ? [requiredRule(t, t(`FIELDS.${label}`))] : []),
    ...(minLength ? [minLengthRule(t, minLength)] : []),
  ],
  cols: cols,
  ...(updateValueHandler && { updateValueHandler }), // Only add updateValueHandler if provided
});

export const createIsActiveField = ({
  t,
  key = "is_active",
  label = "IS_ACTIVE",
  isRequired = true,
  cols = { md: 6, lg: 6 },
}) => ({
  key: key,
  type: "checkbox",
  label: "FIELDS.IS_ACTIVE",
  label: t(`FIELDS.${label}`),
  placeholder: t(`PLACEHOLDER.${label}`),
  value: true,
  required: true,
  rules: [...(isRequired ? [requiredRule(t, t(`FIELDS.${label}`))] : [])],
  cols: cols,
});
