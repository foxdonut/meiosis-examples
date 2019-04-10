import React, { Component } from "react"
import { Button, Menu, Modal } from "semantic-ui-react"

import { initialState } from "./initialState"
import { clearError, navigateTo } from "./patches"
import { Todos } from "../todos"
import { Projects } from "../projects"

export const root = {
  initialState
}

export class Root extends Component {
  render() {
    const { context } = this.props

    return (
      <div>
        <Menu widths={2}>
          <Menu.Item
            active={context.state.pageId === "TodoListPage"}
            onClick={() => context.update(navigateTo("TodoListPage"))}
          >
            Todo List
          </Menu.Item>
          <Menu.Item
            active={context.state.pageId === "ProjectPage"}
            onClick={() => context.update(navigateTo("ProjectPage"))}
          >
            Projects
          </Menu.Item>
        </Menu>
        <div>
          {context.state.pageId === "TodoListPage" && <Todos context={context} />}
          {context.state.pageId === "ProjectPage" && <Projects context={context} />}
        </div>
        <Modal open={context.state.message != null} size="small">
          <Modal.Content>{context.state.message}</Modal.Content>
        </Modal>
        <Modal open={context.state.error != null} size="small">
          <Modal.Content>{context.state.error}</Modal.Content>
          <Modal.Actions>
            <Button onClick={() => context.update(clearError())}>Ok</Button>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}
