import { useSession } from "next-auth/client";
import React, { useState } from "react";
import useTodos from "../hooks/useTodos";
import { firebaseClient } from "../lib/firebaseClient";
import { ITodo } from "../utils/interfaces/todos";
import ClearTextIconButton from "./IconButton";
import CompleteTodoRoundCheckbox from "./RoundCheckbox";
import Textbox from "./Textbox";
interface Props {
  autoFocus?: boolean;
}

export default function CreateTodoField({ autoFocus = false }: Props) {
  // getUser from session
  const session = useSession();
  const userId = session[0]?.userId;
  // set local completed state
  const [completed, setCompleted] = useState<boolean>(false);
  // set local title state
  const [title, setTitle] = useState<ITodo["title"]>();

  // hooks
  const { createTodo } = useTodos();

  // handlers
  const handleToggleCompleted = (checked: boolean) => {
    // log analytics event
    firebaseClient.analytics().logEvent("toggled_new_todo_completed", {
      todoCompleted: checked,
      todoTitle: title,
    });
    // set local state
    setCompleted(checked);
  };

  const handleChangeTitle = (newTitle: ITodo["title"]) => {
    // log analytics event
    firebaseClient.analytics().logEvent("changed_new_todo_title", {
      todoTitle: title,
    });
    // set local state
    setTitle(newTitle);
  };

  const handleSubmitTodo = (title: ITodo["title"]) => {
    // log analytics event
    firebaseClient.analytics().logEvent("submitted_new_todo", {
      todoUserId: userId,
      todoTitle: title,
      todoCompleted: completed,
    });
    // add to db
    createTodo(userId, { title, completed });
    // update local states
    setTitle("");
    setCompleted(false);
  };

  const handleClearTodo = () => {
    // log analytics event
    firebaseClient.analytics().logEvent("cleared_new_todo_title", {
      todoTitle: title,
    });
    // set local states
    setTitle("");
    setCompleted(false);
  };

  return (
    <div
      id={"create-todo"}
      className={`flex w-full h-full justify-center items-center bg-light-0 dark:bg-dark-1`}
      tabIndex={0}
    >
      <CompleteTodoRoundCheckbox
        id={"create-todo-checkbox"}
        checked={completed}
        onToggle={handleToggleCompleted}
      />
      <Textbox
        value={title || ""}
        placeholder="Create a new todo..."
        onChange={handleChangeTitle}
        onSubmit={handleSubmitTodo}
        debounceDelay={0}
        autoFocus={autoFocus}
        submitOnEnterKey
        clearOnEnterKey
      />

      <ClearTextIconButton
        alt="Clear Text"
        src="/icons/icon-cross.svg"
        size="md"
        onClick={handleClearTodo}
      />
    </div>
  );
}
