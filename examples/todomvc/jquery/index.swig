{% extends '../index-common.swig' %}
{% block title %}jQuery{% endblock %}
{% block content %}
{% raw %}
<script id="todoapp" type="text/x-handlebars-template">
  <section class="todoapp">
    {{{header}}}
    {{{main}}}
    {{{footer}}}
  </section>
</script>

<script id="header" type="text/x-handlebars-template">
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo" placeholder="What needs to be done?" autofocus>
  </header>
</script>

<script id="main" type="text/x-handlebars-template">
  <section class="main">
    <input class="toggle-all" type="checkbox">
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      {{#each todos}}
        <li class="{{#if completed}}completed{{/if}} {{#if editing}}editing{{/if}}">
          <div class="view">
            <input data-id="{{id}}" class="toggle" type="checkbox" {{#if completed}}checked{{/if}}>
            <label data-id="{{id}}">{{title}}</label>
            <button data-id="{{id}}" class="destroy"></button>
          </div>
          {{#if editing}}
            <input data-id="{{id}}" type="text" class="edit" value="{{title}}">
          {{/if}}
        </li>
      {{/each}}
    </ul>
  </section>
</script>

<script id="footer" type="text/x-handlebars-template">
  <footer class="footer">
    <span class="todo-count">{{itemsLeftText}}</span>
    <ul class="filters">
    <li><a href="#/"{{#if allSelected}} class="selected"{{/if}}>All</a></li>
    <li><a href="#/active"{{#if activeSelected}} class="selected"{{/if}}>Active</a></li>
    <li><a href="#/completed"{{#if completedSelected}} class="selected"{{/if}}>Completed</a></li>
    </ul>
    {{#if clearCompleted}}
      <button class="clear-completed">Clear completed</button>
    {{/if}}
  </footer>
</script>

<script id="info" type="text/x-handlebars-template">
  <footer class="info">
    <p>Double-click to edit a todo</p>
    <p>Meiosis - VanillaJs - Created by <a href="http://twitter.com/foxdonut00">foxdonut00</a></p>
    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
  </footer>
</script>
{% endraw %}
<script src="/public/lib/meiosis-vanillajs.min.js"></script>
<script src="/public/lib/jquery-2.2.3.min.js"></script>
<script src="/public/lib/handlebars.min-v4.0.5.js"></script>
<script src="/examples/todomvc/common/postRender.js"></script>
<script src="/examples/todomvc/jquery/view.js"></script>
<script src="/examples/todomvc/jquery/ready.js"></script>
<script src="/examples/todomvc/jquery/main.js"></script>
{% endblock %}
