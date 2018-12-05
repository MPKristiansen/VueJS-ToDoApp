<template>
  <div class="todo-list">
    <h1>My To-Do list</h1>
    <div>
      <div class="card-panel todo" v-for="todo in todolist" :key="todo._id">
        <h3>{{todo.title}}</h3>
        <div>
          <p v-for="task in todo.tasks" v-bind:key="task.taskTitle">
            <label>
              <input type="checkbox" v-model="task.completed">
              <span v-bind:class="{completed: task.completed}">{{task.taskTitle}}</span>
            </label>
          </p>
        </div>
        <p v-if="checkCompletion(todo)">
          <button v-on:click="deleteTodo(todo)">Remove</button>
        </p>
      </div>
      <div v-if="todolist.length < 1">
        <p>You have nothing to do :(</p>
        <p>Create a new To-Do below.</p>
      </div>
    </div>
    <div class="card-panel">
      <form v-on:submit="addTodo">
        <div class="input-field">
          <input placeholder="Todo title" class="validate" v-model="newTodo.title">
        </div>
        <div class="input-field">
          <textarea
            placeholder="Enter tasks, seperate with Enter/Return"
            v-model="newTodo.tasks"
            class="materialize-textarea"
          ></textarea>
        </div>
        <button>Create</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "todolist",
  data() {
    return {
      newTodo: {},
      todolist: []
    };
  },
  methods: {
    addTodo: function(e) {
      this.todolist.push({
        title: this.newTodo.title,
        tasks: this.newTodo.tasks
          .split(/\n/)
          .map(element => ({ taskTitle: element, completed: false }))
      });
      e.preventDefault();
    },
    deleteTodo: function(todo) {
      this.todolist.splice(this.todolist.indexOf(todo), 1);
    },
    checkCompletion: function(todo) {
      return todo.tasks.every(({ completed }) => completed === true);
    }
  }
};
</script>
<style scoped>
.completed {
  color: #4caf50 !important;
}
</style>
