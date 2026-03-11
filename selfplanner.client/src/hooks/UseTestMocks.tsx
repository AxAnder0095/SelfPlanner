import { taskMock } from "../mocks/taskMock.js";
import { useState, useMemo } from "react";

interface Task {
    id: string;
    task: string,
    description: string,
    isOngoing: boolean,
    isDone: boolean,
    isPriority: boolean,
    date: Date,
};

export const useTestMocks = () => {
    const [tasks] = useState<Task[]>(taskMock);

    // Derive all task stats/lists in one pass and memoize once.
    const derived = useMemo(() => {
        const ongoing: Task[] = [];
        const completed: Task[] = [];
        const priority: Task[] = [];

        for (const task of tasks) {
            if (task.isOngoing) ongoing.push(task);
            if (task.isDone) completed.push(task);
            if (task.isPriority) priority.push(task);
        }

        return {
            totalTasksLength: tasks.length,
            completedTasksLength: completed.length,
            ongoingTasksLength: ongoing.length,
            priorityTasksLength: priority.length,
            ongoingTasks: ongoing,
            completedTasks: completed,
            priorityTasks: priority,
        };
    }, [tasks]);

    return {
        tasks,
        ...derived,
    }
}