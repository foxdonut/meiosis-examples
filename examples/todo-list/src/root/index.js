import React, { Component } from "react"
import classNames from "classnames"

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
        <div className="ui two item menu">
          <button className={classNames("item", { "active": model.pageId === "TodoListPage" })}
            onClick={() => actions.navigateTo("TodoListPage")}>
            Todo List
          </button>
          <button className={classNames("item", { "active": model.pageId === "ProjectPage" })}
            onClick={() => actions.navigateTo("ProjectPage")}>
            Projects
          </button>
        </div>
        <div>
          {model.pageId === "TodoListPage" && <Todos model={model} actions={actions} />}
          {model.pageId === "ProjectPage" && <Projects model={model} actions={actions} />}
        </div>
      </div>
    )
  }
}
