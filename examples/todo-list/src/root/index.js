import React, { Component } from "react"
import { Button, Menu, Modal } from "semantic-ui-react"

import { initialState } from "./initialState"
import { clearError, navigateTo } from "./actions"
import { Todos } from "../todos"
import { Projects } from "../projects"

export const root = {
  initialState
}

export class Root extends Component {
  render() {
    const { root } = this.props

    return (
      <div>
        <Menu widths={2}>
          <Menu.Item
            active={root.state.pageId === "TodoListPage"}
            onClick={() => root.update(navigateTo("TodoListPage"))}
          >
            Todo List
          </Menu.Item>
          <Menu.Item
            active={root.state.pageId === "ProjectPage"}
            onClick={() => root.update(navigateTo("ProjectPage"))}
          >
            Projects
          </Menu.Item>
        </Menu>
        <div>
          {root.state.pageId === "TodoListPage" && <Todos root={root} />}
          {root.state.pageId === "ProjectPage" && <Projects root={root} />}
        </div>
        <Modal open={root.state.message != null} size="small">
          <Modal.Content>{root.state.message}</Modal.Content>
        </Modal>
        <Modal open={root.state.error != null} size="small">
          <Modal.Content>{root.state.error}</Modal.Content>
          <Modal.Actions>
            <Button onClick={() => root.update(clearError())}>Ok</Button>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}
