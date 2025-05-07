"use client"

import { Button } from "@/components/ui/button";
import {
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogHeader,
    DialogRoot,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import FormNewTask from "../formNewTask/FormNewTask";

export function BtnNewTask() {
    const [open, setOpen] = useState(false)
    return (
        <DialogRoot placement={"center"} open={open} onOpenChange={(e) => setOpen(e.open)}>
            <Flex gap={"1rem"} alignItems={"flex-end"}>
                <Text textStyle={"4xl"}>Bem vindo!</Text>
                <DialogTrigger cursor={"pointer"} asChild>
                    <Button size={{ base: "xs", sm: "sm", md: "md" }} colorPalette={"yellow"}>Nova Tarefa</Button>
                </DialogTrigger>
            </Flex>
            <DialogContent>
                <DialogHeader textAlign={"center"}>
                    <DialogTitle>Criar uma nova tarefa</DialogTitle>
                </DialogHeader>
                <DialogBody>
                    <FormNewTask setOpen={setOpen} />
                </DialogBody>
                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
    )
}