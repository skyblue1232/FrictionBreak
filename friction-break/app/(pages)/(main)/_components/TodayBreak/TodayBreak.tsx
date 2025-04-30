import TodayBreakHeader from './TodayBreakHeadar';
import TodayBreakProgress from './TodayBreakProgress';
import TodayBreakDescription from './TodayBreakDescription';
import Card from '@/components/Common/Card';

export default function TodayBreak() {
  const mockPercent = 75;

  return (
    <Card color="gray" height={300}>
      <TodayBreakHeader />
      <TodayBreakProgress percent={mockPercent} />
      <TodayBreakDescription percent={mockPercent} />
    </Card>
  );
}