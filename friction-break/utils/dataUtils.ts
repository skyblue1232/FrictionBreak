import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);

export const generateInitialDates = (): dayjs.Dayjs[] => {
  const today = dayjs().tz('Asia/Seoul');
  return [
    today.subtract(2, 'day'),
    today.subtract(1, 'day'),
    today,
    today.add(1, 'day'),
    today.add(2, 'day'),
  ];
};

export const loadMorePastDates = (currentDates: dayjs.Dayjs[]): dayjs.Dayjs[] => {
  const firstDate = currentDates[0];
  return [
    firstDate.subtract(3, 'day'),
    firstDate.subtract(2, 'day'),
    firstDate.subtract(1, 'day'),
    ...currentDates,
  ];
};
