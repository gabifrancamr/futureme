import { AllTasks } from "@/components/allTasks/AllTasks";
import { BtnNewTask } from "@/components/btnNewTask/BtnNewTask";
import { Header } from "@/components/header/Header";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex direction="column" gap={"1rem"} className="container">
      <Header />
      <Flex direction="column" paddingX={{ base: '1rem', sm: '3rem', lg: "10rem" }} gap={"1rem"}>
        <BtnNewTask />
        <AllTasks />
      </Flex>
    </Flex>
  );
}
