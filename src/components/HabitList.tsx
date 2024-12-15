
import { Check, X, Trash2 } from 'lucide-react';
import type { Habit } from '../types/habit';

interface HabitListProps {
  habits: Habit[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  currentDate: string;
}

export function HabitList({ habits, onToggle, onDelete, currentDate }: HabitListProps) {
  return (
    <div className="space-y-4">
      {habits.map((habit) => {
        const isCompleted = habit.completedDates.includes(currentDate);
        return (
          <div
            key={habit.id}
            className="flex items-center justify-between p-4 bg-white rounded-lg shadow"
          >
            <span className="text-lg font-medium">{habit.name}</span>
            <div className="flex items-center gap-4">
              <button
                onClick={() => onToggle(habit.id)}
                className={`p-2 rounded-full ${
                  isCompleted ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
                }`}
              >
                {isCompleted ? <Check size={20} /> : <X size={20} />}
              </button>
              <button
                onClick={() => onDelete(habit.id)}
                className="p-2 text-red-500 hover:bg-red-100 rounded-full"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}