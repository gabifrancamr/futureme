"use client"

import { Task as TaskTypes } from "@/types"
import { Badge, Card, Flex } from "@chakra-ui/react"
import { useState } from "react"
import BtnDeleteTask from "../btnDeleteTask/BtnDeleteTask"
import BtnEditTask from "../btnEditTask/BtnEditTask"
import { CheckboxTask } from "../checkboxTask/CheckBoxTask"

interface TaskProps {
    task: TaskTypes
}

export function Task({ task }: TaskProps) {
    const [checked, setChecked] = useState(false)

    return (
        <Card.Root overflow="hidden" maxW="xl" colorPalette={"green"}>
            <Card.Body gap={"0.5rem"} justifyContent={"space-between"}>
                <CheckboxTask checked={checked} setChecked={setChecked} task={task} />
                <Card.Title mb="2" textDecoration={checked ? "blink" : "none"}>{task.title}</Card.Title>
                <Card.Description textDecoration={checked ? "blink" : "none"}>
                    {task.description}
                </Card.Description>
                <Flex justifyContent={"space-between"} mt="1rem">
                    <Badge colorPalette="blue">{task.status}</Badge>

                    <Flex gap={"0.5rem"}>
                        <BtnEditTask task={task} />
                        <BtnDeleteTask task={task} />
                    </Flex>
                </Flex>
            </Card.Body>
        </Card.Root>
    )
}
