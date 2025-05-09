"use client"

import { AllTasks } from "@/components/allTasks/AllTasks";
import { BtnNewTask } from "@/components/btnNewTask/BtnNewTask";
import { Header } from "@/components/header/Header";
import { Loading } from "@/components/loading/Loading";
import { useAppContext } from "@/contexts/AppContext";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  const { loadingTasks } = useAppContext()
  return (
    <Flex direction="column" gap={"1rem"} className="container">
      <Header />
      {loadingTasks ? (
        <Loading />
      ) : (
        <Flex direction="column" paddingX={{ base: '1rem', sm: '3rem', lg: "10rem" }} gap={"1rem"}>
          <BtnNewTask />
          <AllTasks />
        </Flex>
      )}
    </Flex>
  );
}
