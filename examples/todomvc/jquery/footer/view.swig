{% raw %}
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
{% endraw %}
