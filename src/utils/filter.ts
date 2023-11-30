export const titleIncludesFilter = (title: string, filter: string): boolean => {
  return title.toLowerCase().includes(filter.toLowerCase());
};
