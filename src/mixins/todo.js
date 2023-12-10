import { onMounted, ref } from "vue";
const functionTodo = () => {
  // Data
  const todoList = ref([]);
  // methods
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
  return { todoList, setlist };
};
export default functionTodo;
