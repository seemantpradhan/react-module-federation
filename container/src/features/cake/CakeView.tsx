import React from "react";
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { ordered, restocked } from './cakeSlice'
import {
    Box,
    Heading,
    Button,
} from "@chakra-ui/react";

export const CakeView = () => {
    const numOfCakes = useAppSelector((state) => state.cake.numOfCakes)
    const dispatch = useAppDispatch()
    return (
        <Box
            p="2rem"
            mr="2rem"
            border="1px solid #aeaeae"
            borderRadius="1rem"
            backgroundColor="#fff"
        >
            <Heading color="#6F60EA" mb="1rem">
                CAKE VIEW: Number of cakes in Container App - {numOfCakes}
            </Heading>
            <Button mt="1rem" w="100%" onClick={() => dispatch(ordered())}>
                Order Cake
            </Button>
            <Button mt="1rem" w="100%" onClick={() => dispatch(restocked(5))}>
                Restock Cakes
            </Button>
        </Box>
    )
}
