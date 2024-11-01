export const getArabicWeekday = (date: Date): string => {
  const arabicWeekdays = [
    'الأحد',
    'الإثنين',
    'الثلاثاء',
    'الأربعاء',
    'الخميس',
    'الجمعة',
    'السبت',
  ];
  return arabicWeekdays[date.getDay()];
};

export const getNextDay = (date: Date): Date => {
  const newDate = new Date(date.getTime());
  newDate.setHours(0, 0, 0);
  return new Date(newDate.setDate(newDate.getDate() + 1));
};
