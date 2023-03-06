import { navigate } from "gatsby";
import React from "react";
import { Button, Input } from "../styles/StyledComponents";
import Layout from "../components/Layout";
import { addTodo } from "../todos/storage";

export default function () {
  return (
    <Layout>
      <h1>Create TODO</h1>
      <form
        action="/"
        style={{ textAlign: "center" }}
        onSubmit={(e) => {
          e.preventDefault();

          const todoText = new FormData(e.target as HTMLFormElement).get("todo-text")?.toString();
          if (!todoText) return;

          addTodo(todoText);
          navigate("/");
        }}
      >
        <Input type="text" name="todo-text" />
        <br />
        <Button type="submit">Create</Button>
      </form>
    </Layout>
  );
}
