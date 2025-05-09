"use client"

import { useAppContext } from "@/contexts/AppContext";
import { Flex, Text } from "@chakra-ui/react";
import { Task } from "../task/Task";

export function AllTasks() {
    const { tasks } = useAppContext()

    // const tasksInOrder = [...tasks].sort(
    //     (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    // );

    return (
        <>
            {tasks.length > 0 ? (
                <Flex gap={"1rem"} direction={{ base: "column", md: "row" }}>
                    {tasks.map((task) => (
                        <Task key={task.id} task={task} />
                    ))}
                </Flex>
            ) : (
                <Flex justifyContent={"center"} alignItems={"center"}>
                    <Text textStyle={"2xl"} fontWeight={"semibold"} color={"yellow.500"}>Não há tarefas salvas. Crie uma nova!</Text>
                </Flex>
            )}
        </>
    )
}