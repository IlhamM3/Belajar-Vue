<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import router from "@/router";

const token = localStorage.getItem('token');
if(token)
{
  router.replace('/dashboard');
}
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
