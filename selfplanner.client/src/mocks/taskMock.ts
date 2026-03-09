interface Task {
    id: string;
    task: string,
    description: string,
    isOngoing: boolean,
    isDone: boolean,
    date: Date,
};

export const taskMock: Task[] = [
    { id: "1", task: "Wash Laundry", description: "Description for Task 1", isOngoing: true, isDone: false, date: new Date() },
    { id: "2", task: "Clean Room", description: "Description for Task 2", isOngoing: false, isDone: true, date: new Date() },
    { id: "3", task: "Buy Groceries", description: "Description for Task 3", isOngoing: true, isDone: false, date: new Date() }
];