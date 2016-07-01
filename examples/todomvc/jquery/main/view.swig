{% raw %}
<script id="main" type="text/x-handlebars-template">
  <section class="main">
    <input class="toggle-all" type="checkbox" {{#if allCompleted}}checked{{/if}}>
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      {{{renderedTodos}}}
    </ul>
  </section>
</script>
{% endraw %}
