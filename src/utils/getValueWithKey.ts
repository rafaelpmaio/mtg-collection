export const getValueWithKey = (objKey: string, obj: any | undefined) => {
  if (!obj) {
    return;
  }

  let objValue: any;
  for (const [key, value] of Object.entries(obj)) {
    if (key === objKey) {
      objValue = value;
      return objValue;
    }
  }
};
