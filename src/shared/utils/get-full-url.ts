export const getFullUrl = (path: string | undefined) => {
  return path ? `${process.env.REACT_APP_BASE_FILE_URL}${path}` : "";
};
