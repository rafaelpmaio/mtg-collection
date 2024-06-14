export const getDropdownOptions = (pathname: string) => {
  if (pathname === "/") {
    return ["All Collections", "Favorite List", "Completed Sets"];
  }
  if (pathname.includes("/collection")) {
    return ["Number", "Collected", "Missing"];
  }
  return ["page path not found"];
};
