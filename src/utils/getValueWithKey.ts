export const getValueWithKey = (objKey: string, obj: any | undefined) => {
  if (!obj) {
    // console.log("object not found");
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
