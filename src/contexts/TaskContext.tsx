import React, {createContext, useContext, useState, ReactNode, useEffect} from 'react';

interface Task {
    id: string;
    text: string;
    done?: boolean;
    dueDate: string | null;
}

interface TaskContextProps {
    tasksTable: Task[];
    addTaskContext: (task: Task) => void;
    removeTaskContext: (task: Task) => void;
    removeTaskContextById: (id: string) => void;
    toggleTask: (task: Task) => void;
    toggleTaskById: (id: string) => void;
}

const TaskContext = createContext<TaskContextProps>({
    tasksTable: [],
    addTaskContext: () => {
    },
    removeTaskContext: () => {
    },
    removeTaskContextById: () => {
    },
    toggleTask: () => {
    },
    toggleTaskById: () => {
    }
});

export const useTaskContext = () => useContext(TaskContext);

interface TaskProviderProps {
    children: ReactNode;
}

export const TaskProvider: React.FC<TaskProviderProps> = ({children}) => {
    const [tasksTable, setTasksTable] = useState<Task[]>([]);

    const addTaskContext = (task: Task) => {
        setTasksTable([...tasksTable, task]);
    };

    const removeTaskContext = (task: Task) => {
        setTasksTable(tasksTable.filter((t) => t !== task));
    };

    const removeTaskContextById = (id: string) => {
        const task = tasksTable.find((t) => t.id === id);
        if (task) {
            removeTaskContext(task)
        }
    }

    const toggleTask = (task: Task) => {
        setTasksTable((prevTasks) =>
            prevTasks.map((t) =>
                t.id === task.id ? {...t, done: !t.done} : t
            )
        );
    }

    const toggleTaskById = (id: string) => {
        const task = tasksTable.find((t) => t.id === id);
        if (task) {
            toggleTask(task)
        }
    }

    useEffect(() => {
        console.log(tasksTable)
    }, [tasksTable])

    return (
        <TaskContext.Provider
            value={{
                tasksTable: tasksTable,
                addTaskContext: addTaskContext,
                removeTaskContext: removeTaskContext,
                removeTaskContextById: removeTaskContextById,
                toggleTask: toggleTask,
                toggleTaskById: toggleTaskById
            }}>
            {children}
        </TaskContext.Provider>
    );
};
