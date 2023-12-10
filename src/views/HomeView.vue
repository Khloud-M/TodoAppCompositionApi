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
import { ref } from "vue";
import todoMixin from "../mixins/todo";
const { setlist, todoList } = todoMixin();
// Data
const todoObject = ref({
  id: "",
  text: "",
  fromDate: "",
  toDate: "",
  createdAt: "",
  iscomplate: false,
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
    iscomplate: false,
  };
};
</script>

<style>
.home {
  text-align: center;
  text-transform: capitalize;
}
input[type="text"] {
  display: block;
  margin: 20px auto;
  width: 400px;
  height: 30px;
}
input[type="submit"] {
  background: green;
  display: block;
  margin: 20px auto;
  color: white;
  padding: 5px 15px;
  font-size: 18px;
}
</style>
