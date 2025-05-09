'use client'

import { useAppContext } from "@/contexts/AppContext";
import { Task } from "@/types";
import { Checkbox } from "@chakra-ui/react";
import { toast } from "sonner";

interface CheckboxTaskProps {
    checked: boolean
    setChecked: (value: boolean) => void
    task: Task
}

export function CheckboxTask({ checked, setChecked, task }: CheckboxTaskProps) {
    const { refetchTasks } = useAppContext()

    async function handleCheckedChange(newChecked: boolean) {
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
            }
        } catch (error) {
            toast.error('Falha ao mudar status. Tente novamente.');
        }
    }

    return (
        <Checkbox.Root
            size={"md"}
            checked={checked}
            onCheckedChange={(e) => {
                const newChecked = !!e.checked;
                handleCheckedChange(newChecked);
            }}
        >
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label>Marcar como concluído</Checkbox.Label>
        </Checkbox.Root>
    )
}