import { ChangeEvent } from "react";

export const createActions = (updates: any, events: any) => ({
  toggleAllTodos: (evt: ChangeEvent<HTMLInputElement>) => events.toggleAllTodos(evt.target.checked)
});
