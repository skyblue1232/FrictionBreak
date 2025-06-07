// request-break/data/attendanceData.ts
export type AttendanceStatus = '출석' | '결석';

export interface AttendanceData {
  date: string;
  status: AttendanceStatus;
}

export const attendanceData: AttendanceData[] = [
  { date: '2025-05-25', status: '출석' },
  { date: '2025-05-26', status: '출석' },
  { date: '2025-05-27', status: '결석' },
  { date: '2025-05-28', status: '출석' },
  { date: '2025-05-29', status: '출석' },
  { date: '2025-05-30', status: '결석' },
  { date: '2025-05-31', status: '출석' },
  { date: '2025-06-01', status: '출석' },
  { date: '2025-06-02', status: '출석' },
  { date: '2025-06-03', status: '결석' },
  { date: '2025-06-04', status: '출석' },
  { date: '2025-06-05', status: '결석' },
  { date: '2025-06-06', status: '출석' },
];
