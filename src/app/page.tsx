import { BtnNewTask } from "@/components/btnNewTask/BtnNewTask";
import { Header } from "@/components/header/Header";
import { Box, Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex direction="column" gap={"1rem"}>
      <Header />
      <Box className="container">
        <BtnNewTask />
      </Box>
    </Flex>
  );
}
