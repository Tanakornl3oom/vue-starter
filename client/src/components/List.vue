<template>
  <div>
    <ul>
      <li
        v-for="(todoList, index) in todos"
        :key="index"
        @click="dropField(index)"
      >
        {{ todoList }}
      </li>
    </ul>
    {{ todo }}
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    todos: {
      type: Array,
      required: true
    },
    todo: {
      type: String,
      required: true
    },
    dropField: {
      type: Function,
      default: function() {
        return;
      }
    }
  }
};
</script>
