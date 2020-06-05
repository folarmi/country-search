<template>
  <div class="wrapper">
    <div class="col">
      <img  alt="" :src="country.flag" id="flag">
      </div>

      <div class="cols">
      <h1>{{ country.name }}</h1>
      <p>Native name: {{ country.nativeName }} </p>
      <p>Population: {{ country.population }} </p>
      <p>Region: {{ country.region }}</p>
      <p>Subregion:{{ country.subregion }}</p>
      <p>Capital: {{ country.capital }}</p>
      <p v-for="currency in country.currencies">Currencies: {{ currency.name}}</p>
      Languages: <p v-for="lang in country.languages" id="lang"> {{ lang.name }} </p>
      <p id="border"> Border Countries </p>  
      <button v-for="border in country.borders" class="border"> {{ border }}</button>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // imageUrl:this.country.flag,
      name:this.$route.params.country,
      country: {},
    }
  },
       mounted () {
    axios
      .get('https://restcountries.eu/rest/v2/name/' + this.name)
      .then(response => {
          this.country = response.data
          const test = Object.assign({}, this.country);
          this.country = test[0]
      })
       }
}
</script>

<style scoped>
.wrapper{
  margin-left: 3rem;
}

#flag{
  margin-top: 3em ;
  width: 80%;
  margin-left: 2em;
}

#lang:not(:first-child) {
  margin-right: .5em;  
}

#border{
  font-size: 1.5em;
}

/* no need to display empty elements */
#lang:empty {
  display: none;
}

#lang:not(:first-child):after {
  content: ", ";
}

#lang{
    display: inline-block;
    font-size: 1.5em;
}

.border{
  font-size: 1.5em;
  margin-left: .7em;
  margin-bottom: .8em;
  background-color: hsl(209, 48%, 43%);
  color: white;
  border: none;
  padding: .5em;
}

@media (min-width:1024px) { 
  .wrapper{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4em;
  }

  #border, .border,#lang{
        font-size: 1em;
  }
}
</style>