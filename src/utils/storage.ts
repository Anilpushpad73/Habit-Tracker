import { Habit } from "../types/habit";

export const saveHabits = (habits: Habit[]) => {
  localStorage.setItem('habits', JSON.stringify(habits));
};

export const loadHabits = (): Habit[] => {
  const stored = localStorage.getItem('habits');
  return stored ? JSON.parse(stored) : [];
};

export const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0];
};