export const getFormattedDate = (date: Date) => {
  return date.toISOString().split('T')[0];
};

export const createDate = (date: string) => {
  const [year, month, day] = date.split('-');
  return new Date(Number(year), Number(month) - 1, Number(day) + 1);
};

export const compareDates = (date1: string, date2: string): number => {
  const [year1, month1, day1] = date1.split('-');
  const [year2, month2, day2] = date2.split('-');

  if (year1 > year2) return 1;
  if (year1 < year2) return -1;
  if (month1 > month2) return 1;
  if (month1 < month2) return -1;
  if (day1 > day2) return 1;
  if (day1 < day2) return -1;

  return 1;
};
