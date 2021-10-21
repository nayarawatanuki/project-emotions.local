import React, { useContext, useState } from 'react'

export const TaskContext = React.createContext()

const TaskProvider = ({ children }) => {
    const [task_id, setTask_id] = useState();

    console.log("task ", task_id)
    return (
        <TaskContext.Provider
            value={{
                task_id,
                setTask_id
            }}
        >
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider

export function useTaskContext() {
    const context = useContext(TaskContext)

    if (!context) {
        console.error();
        throw new Error('useTaskContext must be used within a TaskContext.Provider.')
    }

    return context
}