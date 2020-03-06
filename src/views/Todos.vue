<template>
  <div id="todos" class="todos">
    <h1>Todos</h1>
    <div class="container">
      <span>
        <input
          class="SubmitForm"
          placeholder="create todo list"
          type="text"
          v-model="todo"
          @keyup.enter.prevent="todoClick"
        />
        <button class="SubmitForm" @click="todoClick" :disabled="isDisabled">
          submit
        </button>
      </span>
    </div>
    <List :todo="todo" :todos="todos" :dropField="dropField" />
  </div>
</template>

<script>
import List from "../components/List";

export default {
  data() {
    return {
      todo: "",
      todos: [],
      submit: this.todo ? false : true
    };
  },
  methods: {
    todoClick() {
      this.todos.push(this.todo);
      this.todo = "";
    },
    dropField(index) {
      this.todos.splice(index, 1);
    }
  },
  computed: {
    isDisabled() {
      return this.todo == "";
    }
  },
  components: {
    List
  }
};
</script>

<style lang="less">
.container {
  display: inline-block;
}
.SubmitForm {
  vertical-align: middle;
}
button {
  height: 100%;
}
</style>
