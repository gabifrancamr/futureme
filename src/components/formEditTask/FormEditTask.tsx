"use client"
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { useAppContext } from "@/contexts/AppContext";
import { Task } from "@/types";
import { Input, Stack, Textarea } from "@chakra-ui/react";
import { zodResolver } from '@hookform/resolvers/zod';
import { SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { toast } from 'sonner';
import * as zod from 'zod';

const editTaskFormSchema = zod.object({
    title: zod
        .string()
        .min(3, "A tarefa precisa ter no mínimo 3 caracteres")
        .nonempty("Nome da tarefa é obrigatório"),
    description: zod
        .string()
        .optional(),
});

export type typeEditTaskSchema = zod.infer<typeof editTaskFormSchema>

interface FormEditTaskProps {
    task: Task;
    setOpen: (value: SetStateAction<boolean>) => void
}

export default function FormEditTask({ task, setOpen }: FormEditTaskProps) {

    const { refetchTasks } = useAppContext()

    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm<typeEditTaskSchema>({
        resolver: zodResolver(editTaskFormSchema),
        defaultValues: {
            title: task.title,
            description: task.description
        }
    })

    async function handleEditTask(data: typeEditTaskSchema) {

        const payload = {
            ...data,
            id: task.id
        }

        try {
            const response = await fetch('/api/editTask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })

            if (response.status === 200) {
                await refetchTasks()
                setOpen(false)
                toast.success('Tarefa atualizada com sucesso.')
            }
        } catch (error) {
            toast.error('Falha ao atualizar tarefa. Tente novamente.');
        }

    }

    return (
        <form onSubmit={handleSubmit(handleEditTask)}>
            <Stack gap="4" align="center" maxW="sm">
                <Field
                    label="Título"
                    invalid={!!errors.title}
                    errorText={errors.title?.message}
                >
                    <Input
                        {...register("title")}
                        maxLength={70}
                        colorPalette={"yellow"}
                    />
                </Field>
                <Field
                    label="Descrição"
                    invalid={!!errors.description}
                    errorText={errors.description?.message}
                >
                    <Textarea
                        {...register("description")}
                        colorPalette={"yellow"}
                    />
                </Field>

                <Button
                    type="submit"
                    loading={isSubmitting}
                    disabled={isSubmitting}
                    colorPalette={"yellow"}
                >
                    Editar
                </Button>
            </Stack>
        </form>
    )
}