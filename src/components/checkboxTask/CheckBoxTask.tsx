'use client'

import { useAppContext } from "@/contexts/AppContext";
import { Task } from "@/types";
import { Checkbox, Flex, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import { toast } from "sonner";

interface CheckboxTaskProps {
    checked: boolean
    setChecked: (value: boolean) => void
    task: Task
}

export function CheckboxTask({ checked, setChecked, task }: CheckboxTaskProps) {
    const { refetchTasks } = useAppContext()
    const [updating, setUpdating] = useState(false)

    async function handleCheckedChange(newChecked: boolean) {
        setUpdating(true)
        const statusValue = newChecked ? 'Concluída' : 'Em andamento'

        const payload = {
            id: task.id,
            status: statusValue
        }

        try {
            const response = await fetch('/api/changeStatus', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })

            if (response.status === 200) {
                setChecked(newChecked);
                await refetchTasks()
                setUpdating(false)
            }
        } catch (error) {
            toast.error('Falha ao mudar status. Tente novamente.');
        }
    }

    return (
        <>
            {updating ? (
                <Flex>
                    <Spinner size="sm" />
                </Flex>
            ) : (
                <Checkbox.Root
                    size={"md"}
                    checked={checked}
                    onCheckedChange={(e) => {
                        const newChecked = !!e.checked;
                        handleCheckedChange(newChecked);
                    }}
                    colorPalette={"yellow"}
                >
                    <Checkbox.HiddenInput />
                    <Checkbox.Control />
                    <Checkbox.Label>Marcar como concluído</Checkbox.Label>
                </Checkbox.Root>
            )}
        </>
    )
}