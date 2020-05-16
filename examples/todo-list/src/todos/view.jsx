import React from "react"

import { TodoForm } from "./todoForm"
import { TodoList } from "./todoList"

export const Todos = ({ state, actions }) => (
  <div>
    <TodoForm state={state} actions={actions} id="todoForm" label="New Todo:" />
    <TodoList state={state} actions={actions} />
  </div>
)
