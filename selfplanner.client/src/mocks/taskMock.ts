interface Task {
    id: string;
    task: string,
    description: string,
    isOngoing: boolean,
    isDone: boolean,
    isPriority: boolean,
    date: Date,
};

export const taskMock: Task[] = [
    { id: "1", task: "Wash Laundry", description: "Description for Task 1", isOngoing: true, isDone: false, isPriority: true, date: new Date() },
    { id: "2", task: "Clean Room", description: "Description for Task 2", isOngoing: false, isDone: true, isPriority: false, date: new Date() },
    { id: "3", task: "Buy Groceries", description: "Description for Task 3", isOngoing: true, isDone: false, isPriority: false, date: new Date() },
    { id: "4", task: "Finish Project", description: "Description for Task 4", isOngoing: false, isDone: true, isPriority: true, date: new Date() },
    { id: "5", task: "Exercise", description: "Description for Task 5", isOngoing: true, isDone: false, isPriority: false, date: new Date() },
    { id: "6", task: "Read Book", description: "Description for Task 6", isOngoing: false, isDone: true, isPriority: false, date: new Date() },
    { id: "7", task: "Cook Dinner", description: "Description for Task 7", isOngoing: true, isDone: false, isPriority: true, date: new Date() },
    { id: "8", task: "Pay Bills", description: "Description for Task 8", isOngoing: false, isDone: true, isPriority: false, date: new Date() },
    { id: "9", task: "Call Friend", description: "Description for Task 9", isOngoing: true, isDone: false, isPriority: false, date: new Date() },
    { id: "10", task: "Plan Trip", description: "Description for Task 10", isOngoing: false, isDone: true, isPriority: true, date: new Date() },
];