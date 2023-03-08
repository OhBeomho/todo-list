import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../styles/StyledComponents";
import { deleteTodo, finishTodo, getTodoList, Todo, TodoFilter } from "../todos/storage";

type TodoListProps = {
  filter: TodoFilter;
};

export default function (props: TodoListProps) {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const refreshItems = () => setTodoList(getTodoList(props.filter));
  useEffect(refreshItems, [props.filter]);

  const todoListElements = todoList.map((todo, index) => (
    <TodoListItem key={index}>
      <b>{todo.text}</b>
      <div>
        <span className="buttons">
          <Button
            onClick={() => {
              deleteTodo("TODO::" + todo.id);
              refreshItems();
            }}
            style={{ color: "red" }}
          >
            Delete
          </Button>
          {!todo.finish ? (
            <Button
              onClick={() => {
                finishTodo("TODO::" + todo.id);
                refreshItems();
              }}
              style={{ color: "green" }}
            >
              Finish
            </Button>
          ) : (
            ""
          )}
        </span>
        {todo.finish ? <span style={{ color: "darkgreen" }}>Finished</span> : ""}
      </div>
    </TodoListItem>
  ));
  return todoList.length == 0 ? <p>Nothing here.</p> : <TodoList>{todoListElements}</TodoList>;
}

const TodoList = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  box-shadow: 0 4px 8px -2px rgba(0, 0, 0, 0.2);
`;

const TodoListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px;
  border: 0.5px solid gray;
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.3);
  }

  & .buttons {
    opacity: 0;
    transition: all 0.2s;
  }

  &:hover .buttons {
    opacity: 1;
  }
`;
