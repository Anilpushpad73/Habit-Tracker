import { Habit, DailyProgress } from '../types/habit';
import { formatDate, getLastNDays } from './dateUtils';

export const calculateWeekProgress = (habits: Habit[]): DailyProgress[] => {
  const dates = getLastNDays(7);
  
  return dates.map(date => {
    const dateStr = formatDate(date);
    const totalCount = habits.length;
    const completedCount = habits.filter(habit => 
      habit.completedDates.includes(dateStr)
    ).length;
    
    return {
      date: dateStr,
      completedCount,
      totalCount,
    };
  });
};