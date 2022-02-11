import React from "react";
import { ApolloProvider } from "@apollo/client";

import { FC } from "react";
import client from "./apollo";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
const App: FC = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <TodoForm />
        <TodoList />
      </ApolloProvider>
    </>
  );
};

export default App;
