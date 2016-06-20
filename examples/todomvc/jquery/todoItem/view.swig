{% raw %}
<script id="todoItem" type="text/x-handlebars-template">
  <li class="{{model.todoClasses}}">
    <div class="view">
      <input data-id="{{model.todo.id}}" class="toggle" type="checkbox" {{#if model.todo.completed}}checked{{/if}}>
      <label data-id="{{model.todo.id}}">{{model.todo.title}}</label>
      <button data-id="{{model.todo.id}}" class="destroy"></button>
    </div>
    {{{input}}}
  </li>
</script>

<script id="todoInput" type="text/x-handlebars-template">
  <input data-id="{{todo.id}}" type="text" class="edit" value="{{todo.title}}">
</script>
{% endraw %}
