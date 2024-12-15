export const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

export const getLastNDays = (n: number): Date[] => {
  const dates: Date[] = [];
  for (let i = n - 1; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    dates.push(date);
  }
  return dates;
};

export const formatDateForDisplay = (date: Date): string => {
  return date.toLocaleDateString('en-US', { weekday: 'short' });
};