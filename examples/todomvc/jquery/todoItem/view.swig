{% raw %}
<script id="todoItem" type="text/x-handlebars-template">
  {{#with todo}}
    <li class="{{model.todoClasses}}">
      <div class="view">
        <input data-id="{{id}}" class="toggle" type="checkbox" {{#if completed}}checked{{/if}}>
        <label data-id="{{id}}">{{title}}</label>
        <button data-id="{{id}}" class="destroy"></button>
      </div>
      {{{input}}}
    </li>
  {{/with}}
</script>

<script id="todoInput" type="text/x-handlebars-template">
  <input data-id="{{todo.id}}" type="text" class="edit" value="{{todo.title}}">
</script>
{% endraw %}
