<template>
  <div class="home">
    <h1>add to do list</h1>
    <form action="" @submit.prevent="addlist">
      <input
        type="text"
        placeholder="enter your text"
        v-model="todoObject.text"
        required
      />
      <input type="date" v-model="todoObject.fromDate" required />
      <input type="date" v-model="todoObject.toDate" required />
      <input type="submit" value="add" />
    </form>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
// Data
const todoList = ref([]);
const todoObject = ref({
  id: "",
  text: "",
  fromDate: "",
  toDate: "",
  createdAt: "",
});
// methods
// addlist function
const addlist = () => {
  todoObject.value.createdAt = new Date();
  todoObject.value.id = todoList.value.length + 1;
  todoList.value.push(todoObject.value);
  setlist();
  alert("add todo succesffly");
  todoObject.value = {
    id: "",
    text: "",
    fromDate: "",
    toDate: "",
    createdAt: "",
  };
};
// setlocalStorage function
const setlist = () => {
  localStorage.setItem("todos", JSON.stringify(todoList.value));
};
// updates function
const update = () => {
  if (localStorage.getItem("todos")) {
    todoList.value = JSON.parse(localStorage.getItem("todos"));
  }
};
// hooks
onMounted(() => {
  update();
});
</script>

<style>
</style>
