<template>
  <div>
       <input @input="changeName" type="text" name="country" v-model= "search" id="country" placeholder="Search for a country....">
  </div>
</template>

<script>
export default {
          data(){
        return{
            search: ''
        }
    },
    methods:{
        changeName: function(){
            this.$emit('changeName',this.search)
        }
    }
}
</script>

<style scoped>
     input{
    background-color:var(--input--background);
    padding: 10px;
    padding-left: 3em;
    color: var(--input--color);
    margin-top: 1em;
    margin-left: 2em;
    width: 70%;
    height: 3em;
    /* border: none; */
    border-radius: .5em;
    font-size: 1.2em;
    outline: none;
    border: 1px solid var(--main-color-light);
  }

  
@media (min-width:1024px) { 
  input{
    padding: 3px;
    font-size: 1em;
    width: 30%;
    height: 2em;
    padding-left: 1.5em;
  }
}
</style>