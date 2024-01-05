import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Task {
    id: string;
    text: string;
    done?: boolean;
    dueDate: string | null;
}
interface TaskContextProps {
    tasksTable: Task[];
    addTask: (task: Task) => void;
    removeTask: (task: Task) => void;
}

const TaskContext = createContext<TaskContextProps>({
    tasksTable: [],
    addTask: () => {},
    removeTask: () => {},
});

export const useTaskContext = () => useContext(TaskContext);

interface TaskProviderProps {
    children: ReactNode;
}

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
    const [tasksTable, setTasksTable] = useState<Task[]>([]);

    const addTask = (task: Task) => {
        setTasksTable([...tasksTable, task]);
        console.log(tasksTable)
    };

    const removeTask = (task: Task) => {
        setTasksTable(tasksTable.filter((t) => t !== task));
        console.log(tasksTable)
    };

    return (
        <TaskContext.Provider value={{ tasksTable: tasksTable, addTask, removeTask }}>
            {children}
        </TaskContext.Provider>
    );
};
