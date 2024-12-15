## Habit Tracker Website
Website: https://habit-tracker-12tlh3j1q-anil-pushapds-projects.vercel.app/

## Habit Tracker App

A modern, responsive web application for tracking daily habits and monitoring progress over time. Built with React, TypeScript, and Tailwind CSS.

### Features

- ✨ Add, update, and delete daily habits
- ✅ Mark habits as complete/incomplete
- 📊 Visual progress tracking with charts
- 📱 Responsive design for mobile and desktop
- 📈 Weekly progress summary
- 💾 Persistent storage using localStorage

### Screenshots

![Habit Tracker App](https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=2072)

### Project Structure

```
src/
├── components/         # React components
│   ├── HabitForm.tsx  # Form for adding new habits
│   ├── HabitList.tsx  # List of habits with actions
│   ├── ProgressChart.tsx  # Visual progress chart
│   └── WeekSummary.tsx   # Weekly progress summary
├── hooks/             # Custom React hooks
│   └── useHabits.ts   # Habit management logic
├── types/             # TypeScript type definitions
│   └── habit.ts       # Habit and Progress types
├── utils/             # Utility functions
│   ├── dateUtils.ts   # Date formatting utilities
│   ├── progressUtils.ts # Progress calculation
│   └── storage.ts     # Local storage operations
└── App.tsx           # Main application component
```

### Getting Started


1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open your browser to the provided URL

### Building for Production

To create a production build:

```bash
npm run build
```

The build output will be in the `dist` directory.

### Testing

The application can be tested directly in any modern web browser. For mobile testing:

1. Run the development server
2. Open the provided URL on your mobile device
3. The responsive design will automatically adjust to your screen size

### Technical Details

- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS for responsive design
- **State Management**: React Hooks
- **Storage**: Browser's localStorage
- **Icons**: Lucide React

### Best Practices Implemented

- Modular component architecture
- Custom hooks for business logic
- TypeScript for type safety
- Responsive design principles
- Clean code organization
- Separation of concerns
