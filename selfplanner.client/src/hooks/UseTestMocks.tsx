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
    const [tasks, setTasks] = useState<Task[]>(taskMock);

    // const fetchTasks = () => {
    //     setTasks(taskMock);
    // };

    const totaltasksLength = useMemo(() => {
        console.log(tasks)
        if (tasks.length === 0) return 0;
        return tasks.length;
    }, [tasks]);

    const completedTasksLength = useMemo(() => {
        if (tasks.length === 0) return 0;
        return tasks.filter(task => task.isDone).length;
    }, [tasks]);

    const ongoingTasksLength = useMemo(() => {
        if (tasks.length === 0) return 0;
        return tasks.filter(task => task.isOngoing).length;
    }, [tasks]);

    const priorityTasksLength = useMemo(() => {
        if (tasks.length === 0) return 0;
        return tasks.filter(task => task.isPriority).length;
    }, [tasks]);

    return {
        tasks,
        totaltasksLength,
        completedTasksLength,
        ongoingTasksLength,
        priorityTasksLength
    }
}