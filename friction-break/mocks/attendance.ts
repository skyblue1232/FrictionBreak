import dayjs from 'dayjs';

const mockAttendance: Record<string, boolean> = {
  [dayjs().subtract(5, 'day').format('YYYY-MM-DD')]: true,
  [dayjs().subtract(4, 'day').format('YYYY-MM-DD')]: false,
  [dayjs().subtract(3, 'day').format('YYYY-MM-DD')]: true,
  [dayjs().subtract(2, 'day').format('YYYY-MM-DD')]: true,
  [dayjs().subtract(1, 'day').format('YYYY-MM-DD')]: false,
  [dayjs().format('YYYY-MM-DD')]: true, // 오늘
};

export default mockAttendance;
