export const getFormattedDate = (date: Date) => {
  return date.toISOString().split('T')[0];
};

export const titleIncludesFilter = (title: string, filter: string): boolean => {
  return title.toLowerCase().includes(filter.toLowerCase());
};

export const compareDates = (date1: Date, date2: Date): number => {
  const [year1, month1, day1] = getFormattedDate(date1).split('-');
  const [year2, month2, day2] = getFormattedDate(date2).split('-');

  if (year1 > year2) return 1;
  if (year1 < year2) return -1;
  if (month1 > month2) return 1;
  if (month1 < month2) return -1;
  if (day1 > day2) return 1;
  if (day1 < day2) return -1;

  return 1;
};
