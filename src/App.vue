<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/Home.vue';


export default {
   components:{
    home:Home
   }
}
</script>

<style>

  :root {
  --main-color-light:hsl(0, 0%, 98%);
  --text-color-light:hsl(200, 15%, 8%);
  --countries--color--light: hsl(0, 0%, 100%);
  --light--mode--input:hsl(0, 0%, 52%);
  --input--color:black;
  --input--background:hsl(0, 0%, 98%);
  }
  
  [data-theme="dark"] {
    --main-color-light: hsl(207, 26%, 17%);
    --text-color-light:white;
    --countries--color--light: hsl(209, 23%, 22%);
    --light--mode--input:hsl(0, 0%, 52%);
    --input--color:white;
    --input--background:hsl(209, 23%, 22%);
  }

  body{
    background-color: var(--main-color-light);
    color: var(--text-color-light);
    font-size: 1.3em;
    font-family: 'Amaranth', sans-serif;
  }

</style>
