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
  required = true,
  minLength = 3,
  cols = { md: 12, lg: 12 },
}) => ({
  key,
  type: "text",
  label: t(`FIELDS.${label}`),
  placeholder: t(`PLACEHOLDER.${label}`),
  value: "",
  required: required,
  rules: [
    ...(required ? [requiredRule(t, t(`FIELDS.${label}`))] : []),
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
  required = true,
  cols = { md: 12, lg: 12 },
}) => ({
  key,
  type: "number",
  label: t(`FIELDS.${label}`),
  placeholder: t(`PLACEHOLDER.${label}`),
  value: 0,
  required: required,
  rules: [...(required ? [requiredRule(t, t(`FIELDS.${label}`))] : [])],
  cols: cols,
  hide,
  prefix,
  mode,
  currency,
});

export const createPasswordField = ({
  t, // t must be passed here
  key,
  label,
  required = true,
  cols = { md: 12, lg: 12 },
}) => ({
  key,
  type: "password",
  label: t(`FIELDS.${label}`),
  placeholder: t(`PLACEHOLDER.${label}`), // Use t to translate the placeholder
  value: "",
  required: required,
  rules: [
    ...(required ? [requiredRule(t, t(`FIELDS.${label}`))] : []),
    minLengthRule(t, 12),
  ],
  cols: cols,
});

export const createPhoneField = ({
  t,
  key,
  label,
  required = true,
  cols = { md: 12, lg: 12 },
}) => ({
  key,
  type: "phone",
  label: t(`FIELDS.${label}`),
  placeholder: t(`PLACEHOLDER.${label}`),
  value: "",
  required: required,
  rules: [
    ...(required ? [requiredRule(t, t(`FIELDS.${label}`))] : []),
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
  cols = { md: 12, lg: 12 },
  returnObject = false,
  display = "chip",
  minLength = 1,
  required = true,
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
  required: required,
  rules: [
    ...(required ? [requiredRule(t, t(`FIELDS.${label}`))] : []),
    ...(minLength ? [minLengthRule(t, minLength)] : []),
  ],
  cols: cols,
  ...(updateValueHandler && { updateValueHandler }), // Only add updateValueHandler if provided
});

export const createIsActiveField = ({
  t,
  key = "is_active",
  label = "IS_ACTIVE",
  required = true,
  cols = { md: 12, lg: 12 },
}) => ({
  key: key,
  type: "checkbox",
  label: t(`FIELDS.${label}`),
  placeholder: t(`PLACEHOLDER.${label}`),
  value: true,
  required: required,
  rules: [...(required ? [requiredRule(t, t(`FIELDS.${label}`))] : [])],
  cols: cols,
});

export const createCheckBoxField = ({
  t,
  key,
  label,
  name,
  checkedValue = true,
  required = true,
  cols = { md: 12, lg: 12 },
}) => ({
  key: key,
  type: "checkbox",
  label: t(`FIELDS.${label}`),
  name: name,
  placeholder: t(`PLACEHOLDER.${label}`),
  value: false,
  checkedValue: checkedValue,
  required: required,
  rules: [...(required ? [requiredRule(t, t(`FIELDS.${label}`))] : [])],
  cols: cols,
});
