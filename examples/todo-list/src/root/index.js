import React, { Component } from "react"
import { Menu } from "semantic-ui-react"

import { actions } from "./actions"
import { Todos } from "../todos"
import { Projects } from "../projects"

export const root = {
  model: () => ({
    pageId: "TodoListPage",
    message: ""
  }),
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
      </div>
    )
  }
}
