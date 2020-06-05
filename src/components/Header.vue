<template>
  <div class="header">
      <h1> Where in the world? </h1>
      <div class="theme-switch-wrapper">
    <label class="theme-switch" for="checkbox">
        <input type="checkbox" id="checkbox" @click="switchDarkMode" />
        <div class="slider round"></div>
  </label>
  <em id="dark-text">Dark Mode</em>
</div>
  </div>
</template>

<script>
export default {
    methods:{
        switchDarkMode(e) {
          if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById('dark-text').textContent = 'Light mode'
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        document.getElementById('dark-text').textContent = 'Dark mode'
    }  
        }
  }
    }

</script>

<style scoped>
  .header{
    display: flex;
    padding: 20px;
    background-color: var(--countries--color--light);
    box-shadow: 0 0 30px #333;
  }

  .header h1{
    margin-left: 0;
  }

  #dark{
    margin-left: 18em;
    height: 6em;
    width: 10%;
    margin-top: 3em;
  }

  .header h1{
    margin-left: .5em;
  }

 /* Switch css */
 .theme-switch-wrapper {
  display: flex;
  align-items: center;
  margin-left: 3em;
 }

  em {
    margin-left: 10px;
    font-size: 1.3rem;
  }

.theme-switch {
  display: inline-block;
  height: 34px;
  position: relative;
  width: 60px;
}

.theme-switch input {
  display:none;
}

.slider {
  background-color: #ccc;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: .4s;
}

.slider:before {
  background-color: #fff;
  bottom: 4px;
  content: "";
  height: 26px;
  left: 4px;
  position: absolute;
  transition: .4s;
  width: 26px;
}

input:checked + .slider {
  background-color: hsl(207, 26%, 17%);
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

@media (min-width:1024px) { 
  .header{
    padding: 3px;
  }

  .theme-switch-wrapper{
    margin-left: 45em;
  }

  h1{
    font-size: 1.1em;
  }
}

</style>