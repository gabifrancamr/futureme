"use client"

import {
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogHeader,
    DialogRoot,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Task } from "@/types";
import { Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import FormDeleteTask from "../formDeleteTask/FormDeleteForm";

interface BtnDeleteTaskProps {
    task: Task
}

export default function BtnDeleteTask({ task }: BtnDeleteTaskProps) {
    const [open, setOpen] = useState(false)
    return (
        <DialogRoot placement={"center"} open={open} onOpenChange={(e) => setOpen(e.open)}>
            <DialogTrigger>
                <Button size={"xs"} colorPalette={"red"}>
                    <FaTrash />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Deseja apagar tarefa?</DialogTitle>
                </DialogHeader>
                <DialogBody>
                    <Flex alignItems={"center"} justifyContent={"center"} gap={"1rem"}>
                        <FormDeleteTask task={task} setOpen={setOpen} />
                        <Button colorPalette={"yellow"} onClick={() => setOpen(false)}>Cancel</Button>
                    </Flex>
                </DialogBody>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
    )
}