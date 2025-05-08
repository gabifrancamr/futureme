"use client"
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { useAppContext } from "@/contexts/AppContext";
import { Input, Stack, Textarea } from "@chakra-ui/react";
import { zodResolver } from '@hookform/resolvers/zod';
import { SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as zod from 'zod';

const newTaskFormSchema = zod.object({
    title: zod
        .string()
        .min(3, "A tarefa precisa ter no mínimo 3 caracteres")
        .nonempty("Nome da tarefa é obrigatório"),
    description: zod
        .string()
        .optional(),
});

export type typeNewTaskSchema = zod.infer<typeof newTaskFormSchema>

interface FormNewTaskProps {
    setOpen: (value: SetStateAction<boolean>) => void
}

export default function FormNewTask({ setOpen }: FormNewTaskProps) {
    const { refetchTasks } = useAppContext()
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<typeNewTaskSchema>({
        resolver: zodResolver(newTaskFormSchema)
    })

    async function handleNewTask(data: typeNewTaskSchema) {
        try {
            const response = await fetch('/api/newTask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            if (response.status === 200) {
                await refetchTasks()
                setOpen(false)
                toast.success("Tarefa criada com sucesso")
            }

        } catch (error) {
            toast.error('Falha ao salvar tarefa. Tente novamente');
        }
    }

    return (
        <form onSubmit={handleSubmit(handleNewTask)}>
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
                        maxLength={70}
                        colorPalette={"yellow"}
                    />
                </Field>

                <Button
                    type="submit"
                    loading={isSubmitting}
                    disabled={isSubmitting}
                    colorPalette={"yellow"}
                >
                    Criar
                </Button>
            </Stack>
        </form>
    )
}