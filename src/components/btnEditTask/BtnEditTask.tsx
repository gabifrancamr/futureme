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
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { MdEdit } from "react-icons/md";
import FormEditTask from "../formEditTask/FormEditTask";

interface BtnEditTaskProps {
    task: Task;
}

export default function BtnEditTask({ task }: BtnEditTaskProps) {
    const [open, setOpen] = useState(false)
    return (
        <DialogRoot placement={"center"} open={open} onOpenChange={(e) => setOpen(e.open)}>
            <DialogTrigger>
                <Button size={"xs"} colorPalette={"yellow"}>
                    <MdEdit />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle textAlign={"center"}>Edit Transaction</DialogTitle>
                </DialogHeader>
                <DialogBody>
                    <FormEditTask task={task} setOpen={setOpen} />
                </DialogBody>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>

    )
}