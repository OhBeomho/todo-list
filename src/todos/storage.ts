export type TodoFilter = "all" | "finished" | "not_finished";
export type Todo = {
  id: string;
  text: string;
  finish: boolean;
  createDate: Date;
};

export function addTodo(text: string) {
  const todoID = crypto.randomUUID();
  localStorage.setItem(
    "TODO::" + todoID,
    JSON.stringify({ id: todoID, text, finish: false, createDate: new Date() })
  );

  return todoID;
}

export function getTodoList(filter: TodoFilter) {
  const todoList: Todo[] = [];

  for (let i = 0; i < localStorage.length; i++) {
    if (!localStorage.key(i)?.startsWith("TODO::")) continue;

    const todo: Todo = JSON.parse(localStorage.getItem(localStorage.key(i) || "") || "null");
    if (
      !todo ||
      (filter === "finished" && !todo.finish) ||
      (filter === "not_finished" && todo.finish)
    )
      continue;

    todoList.push(todo);
  }

  return todoList
    .map((todo) => ({ ...todo, createDate: new Date(todo.createDate) }))
    .sort((a, b) => a.createDate.getTime() - b.createDate.getTime());
}

function getTodo(todoID: string) {
  const todo: Todo = JSON.parse(localStorage.getItem(todoID) || "null");
  return todo;
}

export function editTodo(todoID: string, newText: string) {
  const todo = getTodo(todoID);
  if (!todo) return;

  todo.text = newText;
  localStorage.setItem(todoID, JSON.stringify(todo));
}

export function deleteTodo(todoID: string) {
  const todo = getTodo(todoID);
  if (!todo) return;

  localStorage.removeItem(todoID);
}

export function finishTodo(todoID: string) {
  const todo = getTodo(todoID);
  if (!todo) return;

  todo.finish = true;
  localStorage.setItem(todoID, JSON.stringify(todo));
}
