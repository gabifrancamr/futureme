import { Task as TaskTypes } from "@/types"
import { Badge, Card, Checkbox, Flex } from "@chakra-ui/react"
import BtnDeleteTask from "../btnDeleteTask/BtnDeleteTask"
import BtnEditTask from "../btnEditTask/BtnEditTask"

interface TaskProps {
    task: TaskTypes
}

export function Task({ task }: TaskProps) {
    return (
        <Card.Root overflow="hidden" maxW="xl" colorPalette={"green"}>
            <Card.Body gap={"0.5rem"} justifyContent={"space-between"}>
                <Checkbox.Root size={"md"}>
                    <Checkbox.HiddenInput />
                    <Checkbox.Control />
                    <Checkbox.Label>Marcar como concluído</Checkbox.Label>
                </Checkbox.Root>
                <Card.Title mb="2">{task.title}</Card.Title>
                <Card.Description>
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
