import React, { Component } from "react"
import { Button, Menu, Modal } from "semantic-ui-react"

import { Todos } from "../todos"
import { Projects } from "../projects"

export class Root extends Component {
  render() {
    const { context, actions } = this.props

    return (
      <div>
        <Menu widths={2}>
          <Menu.Item
            active={context.state.pageId === "TodoListPage"}
            onClick={() => actions.navigateTo("TodoListPage")}
          >
            Todo List
          </Menu.Item>
          <Menu.Item
            active={context.state.pageId === "ProjectPage"}
            onClick={() => actions.navigateTo("ProjectPage")}
          >
            Projects
          </Menu.Item>
        </Menu>
        <div>
          {context.state.pageId === "TodoListPage" && <Todos context={context} actions={actions} />}
          {context.state.pageId === "ProjectPage" && (
            <Projects context={context} actions={actions} />
          )}
        </div>
        <Modal open={context.state.message != null} size="small">
          <Modal.Content>{context.state.message}</Modal.Content>
        </Modal>
        <Modal open={context.state.error != null} size="small">
          <Modal.Content>{context.state.error}</Modal.Content>
          <Modal.Actions>
            <Button onClick={() => actions.clearError()}>Ok</Button>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}
