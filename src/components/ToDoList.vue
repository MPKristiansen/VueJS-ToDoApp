<template>
  <div class="todo-list">
    <h1>My To-Do list</h1>
    <div>
      <div
        class="card-panel todo"
        v-bind:class="{completed: todo.completed}"
        v-for="todo in todolist"
      >
        <p>{{todo.title}}</p>
        <div>
          <p>
            <label>
              <input type="checkbox" v-model="todo.completed">
              <span>Completed</span>
            </label>
          </p>
          <p v-if="todo.completed" class="right">
            <button v-on:click="deleteTodo(todo)">Remove</button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "todolist",
  data() {
    return {
      todolist: []
    };
  },
  methods: {
    deleteTodo: function(todo) {
      this.todolist.splice(this.todolist.indexOf(todo), 1);
    }
  },
  created: function() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(function(response) {
        this.todolist = response.data;
      });
  }
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
