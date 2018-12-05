<template>
  <div class="todo-list">
    <h1>My To-Do list</h1>
    <div>
      <div class="card-panel todo" v-for="todo in todolist" :key="todo._id">
        <span>{{todo.date}}</span>
        <h3>{{todo.title}}</h3>
        <div>
          <p v-for="task in todo.tasks">
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
        <p>Create a new To-Do using the button located at the bottom right.</p>
      </div>
      <div class="fixed-action-btn"> <router-link to="/createtodo" class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></router-link></div>
     
    </div>
  </div>
</template>

<script>
export default {
  name: "todolist",
  data() {
    return {
      todolist: [
        {
          id: 0,
          title: "Shopping",
          tasks: [
            {
              taskTitle: "Butter",
              completed: false
            },
            {
              taskTitle: "Milk",
              completed: true
            },
            {
              taskTitle: "Bread",
              completed: false
            }
          ],
          date: "Wed Dec 05 2018 09:51:16"
        },
        {
          id: 1,
          title: "Exercise",
          tasks: [
            {
              taskTitle: "Pushups",
              completed: false
            },
            {
              taskTitle: "Jog",
              completed: false
            },
            {
              taskTitle: "Pullups",
              completed: false
            }
          ],
          date: "Wed Dec 07 2018 12:20:10"
        },
      ]
    };
  },
  methods: {
    deleteTodo: function(todo) {
      this.todolist.splice(this.todolist.indexOf(todo), 1);
    },
    checkCompletion: function(todo) {
      return (todo.tasks.every(({completed}) => completed === true));
    },
  },
};
</script>
<style scoped>
.completed {
  color: #4CAF50 !important;
}
</style>
