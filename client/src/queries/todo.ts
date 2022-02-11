import { gql } from "@apollo/client";
import todoVar from "../stores/todo";

export const GET_TODOS = gql`
  query {
    getTodos @client
  }
`;
