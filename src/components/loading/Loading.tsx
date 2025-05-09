import { Flex, Spinner, Text } from "@chakra-ui/react";

export function Loading() {
    return (
        <Flex gap={"0.5rem"} justifyContent={"center"} alignItems={"center"}>
            <Spinner size={"lg"} />
            <Text textStyle={"2xl"} fontWeight={"semibold"}>
                Carregando Tarefas...
            </Text>
        </Flex>
    )
}