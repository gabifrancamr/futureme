"use client"

import { Task } from '@/types';
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react';

interface AppContextTypes {
    tasks: Task[]
    filteredTasks: [] | Task[]
    setFilteredTasks: Dispatch<SetStateAction<Task[] | []>>
    errorLoadingTasks: boolean
    loadingTasks: boolean
    refetchTasks: () => Promise<void>
}

const AppContext = createContext({} as AppContextTypes);

interface UsersProvider {
    children: ReactNode
}

async function getTasks() {
    const response = await fetch(`/api/getTasks`, {
        method: 'GET',
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch tasks data");
    }

    const data = await response.json();

    return data.tasks;
}

export function AppProvider({ children }: UsersProvider) {
    const [tasks, setTasks] = useState<Task[]>([])
    const [filteredTasks, setFilteredTasks] = useState<Task[]>([])
    const [loadingTasks, setLoadingTasks] = useState(true)
    const [errorLoadingTasks, setErrorLoadingTasks] = useState(false)


    useEffect(() => {
        async function fetchTasks() {
            try {
                const tasksData = await getTasks();
                setTasks(tasksData)
                setFilteredTasks(tasksData)
                setLoadingTasks(false)


            } catch (error) {
                console.error(error);
                setErrorLoadingTasks(true)
            }
        }

        fetchTasks()

    }, [])

    async function refetchTasks() {
        const updatedTasks = await getTasks()
        setTasks(updatedTasks)
        setFilteredTasks(updatedTasks)
    }

    return (
        <AppContext.Provider value={{ tasks, filteredTasks, setFilteredTasks, loadingTasks, errorLoadingTasks, refetchTasks }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)