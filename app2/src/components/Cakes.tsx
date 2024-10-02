import { Button, Flex, Text } from "@chakra-ui/react";
import { useAppSelector, useAppDispatch } from '../../../container/src/store/hooks'
import { ordered, restocked } from '../../../container/src/features/cake/cakeSlice'

const Cakes = () => {
  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes)
  const dispatch = useAppDispatch()

  return (
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
  );
};

export default Cakes;
