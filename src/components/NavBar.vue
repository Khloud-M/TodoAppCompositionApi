<template>
  <div class="navBar">
    <ul>
      <li v-for="route in router.options.routes" :key="route.name">
        <router-link :to="{ name: route.name }">
          {{ route.meta.title }}</router-link
        >
      </li>
    </ul>
  </div>
</template>
  <script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>
  
  <style>
.navBar ul {
  height: 60px;
  display: flex;
  justify-content: center;
  column-gap: 50px;
  align-items: center;
  background-color: #238f23;
  list-style: none;
}
ul li a {
  color: white;
  font-size: 25px;
  text-decoration: none;
}
.router-link-active {
  text-decoration: underline;
}
</style>
  