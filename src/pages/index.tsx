import React, { useState } from "react";
import type { HeadFC } from "gatsby";
import Layout from "../components/Layout";
import { TodoFilter } from "../todos/storage";
import TodoList from "../components/TodoList";
import "../styles/globals.css";
import { Select } from "../styles/StyledComponents";

export default function () {
  const [filter, setFilter] = useState<TodoFilter>("all");

  return (
    <Layout>
      <h1>TODO List</h1>
      <div style={{ width: "100%", textAlign: "right" }}>
        <Select onChange={(e) => setFilter(e.target.value as TodoFilter)}>
          <option value="all">All</option>
          <option value="finished">Finished</option>
          <option value="not_finished">Not Finished</option>
        </Select>
      </div>
      <hr style={{ width: "100%", backgroundColor: "black", borderColor: "black" }} />
      <TodoList filter={filter}></TodoList>
    </Layout>
  );
}

export const Head: HeadFC = () => <title>Todo List</title>;
