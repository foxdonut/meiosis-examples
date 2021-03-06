import React from "react"
import { Button, Menu, Modal } from "semantic-ui-react"

import { Todos } from "../todos"
import { Projects } from "../projects"

export const Root = ({ state, actions }) => (
  <div>
    <Menu widths={2}>
      <Menu.Item
        active={state.pageId === "TodoListPage"}
        onClick={() => actions.navigateTo("TodoListPage")}
      >
        Todo List
      </Menu.Item>
      <Menu.Item
        active={state.pageId === "ProjectPage"}
        onClick={() => actions.navigateTo("ProjectPage")}
      >
        Projects
      </Menu.Item>
    </Menu>
    <div>
      {state.pageId === "TodoListPage" && <Todos state={state} actions={actions} />}
      {state.pageId === "ProjectPage" && <Projects state={state} actions={actions} />}
    </div>
    <Modal open={state.message != null} size="small">
      <Modal.Content>{state.message}</Modal.Content>
    </Modal>
    <Modal open={state.error != null} size="small">
      <Modal.Content>{state.error}</Modal.Content>
      <Modal.Actions>
        <Button onClick={() => actions.clearError()}>Ok</Button>
      </Modal.Actions>
    </Modal>
  </div>
)
