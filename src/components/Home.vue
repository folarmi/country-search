<template>
  <div id="app">
  <Header ></Header>
   <search @changeName="updateName($event)"></search>
  <filter-country   @getContinent="updateContinent($event)"></filter-country>
  <div class="gallery">
  <countries v-for="item in filteredCountries" :key="item.id" :src="item.flag" :country="item.name"
  :population="item.population" :region="item.region" :capital="item.capital"></countries>  </div>
  </div>
</template>

<script>
import Header from './Header.vue';
import Filter from './Filter.vue';
import Search from './Search.vue';
import Countries from './Countries.vue';
import Country from './Country.vue';

export default {
  data(){
        return{
            info:[],
            search:'',
            selectedContinent:''
        }
    },
    methods:{
      updateName:function(updatedName){
         this.search = updatedName;
      },
      updateContinent: function(continentSelected){
        this.selectedContinent = continentSelected;
      }
    },
     mounted () {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
          this.info = response.data
      })
},
  components:{
    Header:Header,
    filterCountry:Filter,
    search:Search,
    countries:Countries,
    country:Country
  },


  computed: {
      filteredCountries: function(){ 
        return this.info.filter((info) => {
          return info.name.toLowerCase().match(this.search.toLowerCase()) && info.region.toLowerCase().match(this.selectedContinent.toLowerCase())
        })
      },
    }
}
</script>

<style scoped>
  body{
    font-size: 2em;
  }

@media (min-width:1024px) { 
  .gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    grid-gap: 1rem;
  /* display: grid;
  grid-template-columns: repeat(minmax(250px, 1fr));  */
  /* grid-auto-rows: minmax(200px, auto);
  grid-gap: 1rem; */
  }

}

</style>
