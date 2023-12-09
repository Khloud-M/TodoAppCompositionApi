<template>
  <div class="show_todo">
    <div>show todo</div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
// Data
const listlodo = ref([]);
//  method
const getLocalStorage = () => {
  if (localStorage.getItem("todos")) {
    listlodo.value = JSON.parse(localStorage.getItem("todos"));
  }
  console.log(listlodo.value);
};
onMounted(() => {
  getLocalStorage();
});
</script>
