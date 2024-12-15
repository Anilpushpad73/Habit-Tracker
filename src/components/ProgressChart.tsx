
import type { DailyProgress } from '../types/habit';

interface ProgressChartProps {
  weekProgress: DailyProgress[];
}

export function ProgressChart({ weekProgress }: ProgressChartProps) {
  const maxPercentage = Math.max(...weekProgress.map(day => 
    day.totalCount > 0 ? (day.completedCount / day.totalCount) * 100 : 0
  ));

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Weekly Progress</h2>
      <div className="flex items-end justify-between h-40 gap-2">
        {weekProgress.map((day) => {
          const percentage = day.totalCount > 0 
            ? (day.completedCount / day.totalCount) * 100 
            : 0;
          const height = maxPercentage > 0 ? (percentage / maxPercentage) * 100 : 0;
          
          return (
            <div key={day.date} className="flex flex-col items-center flex-1">
              <div className="w-full relative" style={{ height: '128px' }}>
                <div
                  className="absolute bottom-0 w-full bg-blue-500 rounded-t"
                  style={{ height: `${height}%` }}
                />
              </div>
              <div className="text-sm mt-2">
                {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}
              </div>
              <div className="text-xs text-gray-600">
                {day.completedCount}/{day.totalCount}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}