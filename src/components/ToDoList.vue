<template>
  <div class="container">
    <div class="row">
      <h1>My To-do list</h1>
      <div
        class="card-panel todo z-depth-2"
        v-for="(todo, index) in todolist"
        :key="`todo-${index}`"
      >
        <div class="todo-title">
          <h3>{{todo.title}}</h3>
        </div>
        <div class="divider"></div>
        <div>
          <p v-for="(task, index) in todo.tasks" v-bind:key="`task-${index}`">
            <label>
              <input type="checkbox" v-model="task.completed" v-bind:click="saveTodo()">
              <span v-bind:class="{completed: task.completed}">{{task.taskTitle}}</span>
            </label>
          </p>
        </div>
        <p v-if="checkCompletion(todo)">
          <button v-on:click="deleteTodo(todo)" class="waves-effect waves-light btn red">
            <i class="material-icons left">cancel</i>Remove
          </button>
        </p>
      </div>
      <div v-if="todolist.length < 1">
        <p>You have nothing to do :(</p>
        <p>Create a new To-do below.</p>
      </div>
    </div>
    <div class="card-panel">
      <form v-on:submit="addTodo">
        <div class="input-field">
          <input placeholder="To-do title" class="validate" required v-model="newTodo.title">
        </div>
        <div class="input-field">
          <textarea
            placeholder="Enter 1 task per line"
            v-model="newTodo.tasks"
            class="materialize-textarea"
            required
          ></textarea>
        </div>
        <button class="btn green">Create</button>
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
    addTodo(e) {
      if (!this.newTodo) {
        return;
      }
      this.todolist.push({
        title: this.newTodo.title,
        tasks: this.newTodo.tasks
          .split(/\n/)
          .map(element => ({ taskTitle: element, completed: false }))
      });
      e.preventDefault();
      this.saveTodo();
    },
    deleteTodo(todo) {
      this.todolist.splice(this.todolist.indexOf(todo), 1);
      this.saveTodo();
    },
    checkCompletion(todo) {
      return todo.tasks.every(({ completed }) => completed === true);
    },
    saveTodo() {
      const parsed = JSON.stringify(this.todolist);
      localStorage.setItem("localtodolist", parsed);
    }
  },
  mounted() {
    if (localStorage.getItem("localtodolist")) {
      try {
        this.todolist = JSON.parse(localStorage.getItem("localtodolist"));
      } catch (e) {
        localStorage.removeItem("localtodolist");
      }
    }
  }
};
</script>
<style scoped>
.completed {
  color: #4caf50 !important;
}
</style>
