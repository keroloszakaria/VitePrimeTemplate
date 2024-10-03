export function transformSchemaToObject(schema) {
  return schema.reduce((acc, field) => {
    if (field.type === "group") {
      if (!acc.items) {
        acc.items = [];
      }

      const groupObject = {};
      field.value.forEach((groupField) => {
        if (groupField.key && groupField.value !== "") {
          groupObject[groupField.key.replace(/_\d+$/, "")] = groupField.value;
        }
      });

      // Only push the groupObject if it has valid keys
      if (Object.keys(groupObject).length > 0) {
        acc.items.push(groupObject);
      }
    } else if (field.key) {
      const keys = field.key.split(".");
      if (keys.length > 1) {
        const [parentKey, childKey] = keys;
        if (!acc[parentKey]) {
          acc[parentKey] = {};
        }
        acc[parentKey][childKey] = field.value;
      } else {
        acc[field.key] = field.value;
      }
    }
    return acc;
  }, {});
}

export function updateSchemaValues(schema, data) {
  schema.forEach((item) => {
    if (item.key in data) {
      item.value = data[item.key];
    } else {
      const [mainKey, lang] = item.key.split(".");
      if (lang && data[mainKey] && data[mainKey][lang]) {
        item.value = data[mainKey][lang];
      }
    }
  });

  return schema;
}

export function resetSchemaValues(schema) {
  schema.forEach((item) => {
    if (typeof item.value == "string") item.value = "";
    else item.value = [];
  });
}

export function objectToQueryString(obj) {
  const queryParams = Object.keys(obj)
    .filter((key) => obj[key] !== undefined) // Filter out undefined values
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join("&");
  return queryParams;
}

export function getFieldByKey(schema, key) {
  console.log(schema);
  return schema.find((field) => field.key === key);
}
