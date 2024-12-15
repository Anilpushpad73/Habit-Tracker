export interface Habit {
  id: string;
  name: string;
  createdAt: string;
  completedDates: string[];
}

export interface DailyProgress {
  date: string;
  completedCount: number;
  totalCount: number;
}