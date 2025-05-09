import { useAppContext } from "@/contexts/AppContext";
import { Task } from "@/types";
import { SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "../ui/button";

interface FormDeleteTaskProps {
    task: Task
    setOpen: (value: SetStateAction<boolean>) => void
}

export default function FormDeleteTask({ task, setOpen }: FormDeleteTaskProps) {
    const { refetchTasks } = useAppContext()

    const {
        handleSubmit,
        formState: { isSubmitting },
    } = useForm()

    async function handleDeleteUser() {
        try {
            const response = await fetch('/api/deleteTask', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: task.id
                })
            })


            if (response.status === 200) {
                await refetchTasks()
                setOpen(false)
                toast.success('Tarefa deletada com sucesso')
            }
        } catch (error) {
            toast.error('Falha em deletar usuário. Tente novamente mais tarde.');
        }
    }
    return (
        <form onSubmit={handleSubmit(handleDeleteUser)}>
            <Button
                type="submit"
                loading={isSubmitting}
                disabled={isSubmitting}
                colorPalette={"red"}>
                Delete
            </Button>
        </form>
    )
}