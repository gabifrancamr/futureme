import { Task as TaskTypes } from "@/types"
import { Badge, Card, Checkbox, Flex } from "@chakra-ui/react"
import { FaTrash } from "react-icons/fa"
import { HiPencilSquare } from "react-icons/hi2"

interface TaskProps {
    task: TaskTypes
}

export function Task({ task }: TaskProps) {
    return (
        <Card.Root overflow="hidden" maxW="xl" colorPalette={"green"}>
            <Card.Body gap={"0.5rem"}>

                <Checkbox.Root size={"sm"}>
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

                    <Flex gap={"1rem"}>
                        <FaTrash size={15} />
                        <HiPencilSquare size={15} />
                    </Flex>
                </Flex>
            </Card.Body>
        </Card.Root>
    )
}
