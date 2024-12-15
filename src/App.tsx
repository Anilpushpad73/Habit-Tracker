
import { HabitForm } from './components/HabitForm';
import { HabitList } from './components/HabitList';
import { ProgressChart } from './components/ProgressChart';
import { WeekSummary } from './components/WeekSummary';
import { useHabits } from './hooks/useHabits';
import { formatDate } from './utils/dateUtils';
import { calculateWeekProgress } from './utils/progressUtils';

function App() {
  const { habits, addHabit, toggleHabit, deleteHabit } = useHabits();
  const currentDate = formatDate(new Date());
  const weekProgress = calculateWeekProgress(habits);

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Habit Tracker</h1>
          <p className="text-gray-600">Track your daily habits and build consistency</p>
        </div>

        <HabitForm onAdd={addHabit} />
        
        <WeekSummary weekProgress={weekProgress} />
        <ProgressChart weekProgress={weekProgress} />
        
        <HabitList
          habits={habits}
          onToggle={(id) => toggleHabit(id, currentDate)}
          onDelete={deleteHabit}
          currentDate={currentDate}
        />
      </div>
    </div>
  );
}

export default App;