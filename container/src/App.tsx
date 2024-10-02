import React from "react";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import store from './store/store'
import { ContainerApp } from "./components/ContainerApp";
import { IcecreamView } from "./features/icecream/IcecreamView";

const CounterAppOne = React.lazy(() => import("app1/CounterAppOne"));
const CounterAppTwo = React.lazy(() => import("app2/CounterAppTwo"));
const Cakes = React.lazy(() => import("app2/Cakes"));

const App = () => (
  <>
    <Provider store={store}>
      <Routes>
        <Route
          path="/"
          element={
            <ContainerApp
              CounterAppOne={CounterAppOne}
              CounterAppTwo={CounterAppTwo}
              Cakes={Cakes}
            />
          }
        />
        <Route path="app1/*" element={<CounterAppOne />} />
        <Route path="icecream" element={<IcecreamView />} />
        {/* <Route path="app2/cakes" element={<Cakes />} /> */}
        <Route path="app2/*" element={<CounterAppTwo />} />
      </Routes>
    </Provider>
  </>
);

export default App;
