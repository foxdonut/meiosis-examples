import React, { Component } from "react"
import { Button, Menu, Modal } from "semantic-ui-react"

import { model } from "./model"
import { patches } from "./patches"
import { actions } from "./actions"
import { Todos } from "../todos"
import { Projects } from "../projects"

export const root = {
  model,
  patches,
  actions
}

export class Root extends Component {
  render() {
    const { model, actions } = this.props

    return (
      <div>
        <Menu widths={2}>
          <Menu.Item active={model.pageId === "TodoListPage"}
            onClick={() => actions.navigateTo("TodoListPage")}>
            Todo List
          </Menu.Item>
          <Menu.Item active={model.pageId === "ProjectPage"}
            onClick={() => actions.navigateTo("ProjectPage")}>
            Projects
          </Menu.Item>
        </Menu>
        <div>
          {model.pageId === "TodoListPage" && <Todos model={model} actions={actions} />}
          {model.pageId === "ProjectPage" && <Projects model={model} actions={actions} />}
        </div>
        <Modal open={model.message != null} size="small">
          <Modal.Content>{model.message}</Modal.Content>
        </Modal>
        <Modal open={model.error != null} size="small">
          <Modal.Content>{model.error}</Modal.Content>
          <Modal.Actions>
            <Button onClick={actions.clearError}>Ok</Button>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}
