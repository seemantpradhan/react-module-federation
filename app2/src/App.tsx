import { Box } from "@chakra-ui/react";
import React from "react";
import { Provider } from "react-redux";
import store from '../../container/src/store/store'
import Cakes from "./components/Cakes";
import CounterAppTwo from "./components/CounterAppTwo";

const App = () => (
	<Provider store={store}>
		<Box margin="1.2rem">
			<Box>APP-2</Box>
			<Box>
				<CounterAppTwo />
			</Box>
			<Box>
				<Cakes />
			</Box>
		</Box>
	</Provider>
);

export default App;
