<template>
  <header class="remove"> 
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/signin">Sign In</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView/>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

export default {
  components: {
    HelloWorld,
    RouterLink,
    RouterView,
  },
  mounted() {
    const token = localStorage.getItem('token');
    if (token) {
      const remove = document.querySelector('.remove');
      remove.remove();
      const cssApp = document.querySelector('#app');
      cssApp.style.display = 'grid';
      cssApp.style.gridTemplateColumns = '1fr';
      cssApp.style.padding = '0 2rem';
      cssApp.style.maxWidth = '180vh';
      cssApp.style.maxheight = '200vh';
    }else{
      const cssBody = document.querySelector('body');
      cssBody .style.overflowY = 'hidden';  
    }
  }
}
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

.hidden {
  display: none;
}
</style>
