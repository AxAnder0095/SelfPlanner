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
    { id: "1", task: "Wash Laundry", description: "Wash all the towls from this week and last.", isOngoing: true, isDone: false, isPriority: true, date: new Date() },
    { id: "2", task: "Clean Room", description: "Description for Task 2", isOngoing: false, isDone: true, isPriority: false, date: new Date() },
    { id: "3", task: "Buy Groceries", description: "Description for Task 3", isOngoing: true, isDone: false, isPriority: false, date: new Date() },
    { id: "4", task: "Finish Project", description: "Description for Task 4", isOngoing: false, isDone: true, isPriority: true, date: new Date() },
    { id: "5", task: "Exercise", description: "Description for Task 5", isOngoing: true, isDone: false, isPriority: false, date: new Date() },
    { id: "6", task: "Read Book", description: "Description for Task 6", isOngoing: false, isDone: true, isPriority: false, date: new Date() },
    { id: "7", task: "Cook Dinner", description: "Description for Task 7", isOngoing: true, isDone: false, isPriority: true, date: new Date() },
    { id: "8", task: "Pay Bills", description: "Description for Task 8", isOngoing: false, isDone: true, isPriority: false, date: new Date() },
    { id: "9", task: "Call Friend", description: "Description for Task 9", isOngoing: true, isDone: false, isPriority: false, date: new Date() },
    { id: "10", task: "Plan Trip", description: "Description for Task 10", isOngoing: false, isDone: true, isPriority: true, date: new Date() },
    { id: "11", task: "Attend Meeting", description: "Description for Task 11", isOngoing: true, isDone: false, isPriority: false, date: new Date() },
    { id: "12", task: "Write Report", description: "Description for Task 12", isOngoing: false, isDone: true, isPriority: false, date: new Date() },
    { id: "13", task: "Go Shopping", description: "Description for Task 13", isOngoing: true, isDone: false, isPriority: true, date: new Date() },
    { id: "14", task: "Attend Workshop", description: "Description for Task 14", isOngoing: false, isDone: true, isPriority: false, date: new Date() },
    { id: "15", task: "Meditate", description: "Description for Task 15", isOngoing: true, isDone: false, isPriority: false, date: new Date() },
    { id: "16", task: "Visit Doctor", description: "Description for Task 16", isOngoing: false, isDone: true, isPriority: true, date: new Date() },
    { id: "17", task: "Clean Kitchen", description: "Description for Task 17", isOngoing: true, isDone: false, isPriority: false, date: new Date() },
    { id: "18", task: "Organize Closet", description: "Description for Task 18", isOngoing: false, isDone: true, isPriority: false, date: new Date() },
    { id: "19", task: "Write Blog Post", description: "Description for Task 19", isOngoing: true, isDone: false, isPriority: true, date: new Date() },
    { id: "20", task: "Learn New Skill", description: "Description for Task 20", isOngoing: false, isDone: true, isPriority: false, date: new Date() },
];