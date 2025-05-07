import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";

export function Header() {
    return (
        <Box bg={"#F2C041"} paddingY={"1rem"}>
            <Flex alignItems={"center"} justifyContent={"center"}>
                <Image src="https://static.wixstatic.com/media/edb4f9_abd0533208c44e4e84bdc4ad942ecbb6~mv2.png/v1/fill/w_160,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo-fm2.png" alt="logo-fm2.png" width="160" height="60" />
            </Flex>
        </Box>
    )
}