<template>
  <div class="show_todo">
    <h1>show todo</h1>
    <table v-if="todoList.length">
      <thead>
        <th>text</th>
        <th>from</th>
        <th>to</th>
        <th>created at</th>
        <th>action</th>
      </thead>
      <tbody>
        <tr
          v-for="(todo, index) in todoList"
          :key="todo.id"
          :style="`${
            todo.iscomplate ? 'background:#9bc79b' : 'background:transparent'
          }`"
        >
          <td>{{ todo.text }}</td>
          <td>{{ todo.fromDate }}</td>
          <td>{{ todo.toDate }}</td>
          <td>{{ new Date(todo.createdAt).toLocaleDateString() }}</td>
          <td>
            <div>
              <button class="complate" @click="complate(todo)">
                {{ todo.iscomplate ? "Incomplate" : "complate" }}
              </button>
              <button class="delete" @click="deleteList(index)">delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <h2 v-else style="line-height: 15">no todo to show</h2>
  </div>
</template>
<script setup>
import todoMixin from "../mixins/todo";
// Data
const { setlist, todoList } = todoMixin();

// delete
const deleteList = (index) => {
  todoList.value.splice(index, 1);
  setlist();
};
const complate = (todo) => {
  todo.iscomplate = !todo.iscomplate;
  setlist();
};
</script>
<style scoped>
.show_todo {
  text-align: center;
}
table {
  width: 90%;
  margin: 30px auto;
}
th {
  font-size: 25px;
}
th,
tr,
td {
  border: 1px solid;
  padding: 15px;
}
.complate {
  margin: 0 7px;
  background: green;
  color: white;
  padding: 5px 15px;
  font-size: 18px;
  border: none;
  border-radius: 10px;
}
.delete {
  background: red;
  color: white;
  padding: 5px 15px;
  font-size: 18px;
  border: none;
  border-radius: 10px;
}
</style>
