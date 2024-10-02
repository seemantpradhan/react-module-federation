import { Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../../../container/src/store/hooks'
import { ordered, restocked } from '../../../container/src/features/cake/cakeSlice'


const Counter = () => {
  const [count, setCount] = useState(1);
  const location = useLocation();

  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes)
  const dispatch = useAppDispatch()

  return (
    <>
      <Flex color="#000" gap="1rem" direction="column">
        <Text>
          Add by one each click <strong>APP-2</strong>
        </Text>
        <Text>Your click count : {count} </Text>
        <Button onClick={() => setCount((prevState) => prevState * 2)}>
          Click me
        </Button>
        {location.pathname !== "/" && (
          <Button as={Link} to="/">
            Back to container
          </Button>
        )}
      </Flex>
      <Flex color="#000" gap="1rem" direction="column">
        <Text>
          Number of cakes - {numOfCakes} <strong>in APP-2 </strong>
        </Text>
        <Text>Click to order or restock</Text>
        <Button onClick={() => dispatch(ordered())}>
          Order Cake
        </Button>
        <Button onClick={() => dispatch(restocked(5))}>
          Restock Cakes
        </Button>
      </Flex>
    </>
  );
};

export default Counter;
