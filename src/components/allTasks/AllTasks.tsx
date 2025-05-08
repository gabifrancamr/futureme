"use client"

import { useAppContext } from "@/contexts/AppContext";
import { Flex } from "@chakra-ui/react";
import { Task } from "../task/Task";

export function AllTasks() {
    const { tasks } = useAppContext()
    return (
        <Flex gap={"1rem"}>
            {tasks.map((task) => (
                <Task key={task.id} task={task} />

            ))}

        </Flex>
    )
}