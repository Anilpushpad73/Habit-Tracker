
import type { DailyProgress } from '../types/habit';
import { formatDateForDisplay } from '../utils/dateUtils';

interface WeekSummaryProps {
  weekProgress: DailyProgress[];
}

export function WeekSummary({ weekProgress }: WeekSummaryProps) {
  const totalHabits = weekProgress.reduce((sum, day) => sum + day.completedCount, 0);
  const possibleHabits = weekProgress.reduce((sum, day) => sum + day.totalCount, 0);
  const completionRate = possibleHabits > 0 
    ? Math.round((totalHabits / possibleHabits) * 100) 
    : 0;

  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <h2 className="text-xl font-semibold mb-4">Week Summary</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-4 bg-blue-50 rounded-lg">
          <div className="text-3xl font-bold text-blue-600">{totalHabits}</div>
          <div className="text-sm text-gray-600">Habits Completed</div>
        </div>
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <div className="text-3xl font-bold text-green-600">{completionRate}%</div>
          <div className="text-sm text-gray-600">Completion Rate</div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-medium mb-2">Daily Breakdown</h3>
        <div className="space-y-2">
          {weekProgress.map(day => (
            <div key={day.date} className="flex justify-between items-center">
              <span className="text-gray-600">
                {formatDateForDisplay(new Date(day.date))}
              </span>
              <span className="font-medium">
                {day.completedCount}/{day.totalCount} completed
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}