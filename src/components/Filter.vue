<template>
  <div>
      <select  @click="getContinent" name="" id="continent" v-model="selectedContinent">
        <option value="" disabled selected>Filter by Continent </option>
        <option value="Africa"> Africa </option>
        <option value="America"> America </option>
        <option value="Asia"> Asia </option>
        <option value="Europe"> Europe </option>
        <option value="Oceania"> Oceania </option>
      </select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedContinent:'',
      // continents: ['Africa','America','Asia','Europe','Oceania']
    }
  },
  methods:{
    getContinent:function(){
      this.$emit('getContinent',this.selectedContinent);
    }
  }
}
</script>

<style scoped>
    select{
    background-color:var(--input--background);
    border: none;
    color: var(--text-color-light);
    margin-top: 3em;
    margin-left: 2em;
    width:60%;
    height: 4em;
    padding-left: 3em;
    font-size: .7em;
    }


    
@media (min-width:1024px) { 
  select {
    width: 30%;
    height: 3em;
  }
}
</style>