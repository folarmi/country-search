<template>
    <div class="card">
  <img @click="navigateToCountry" :src="src"  style="width:100%">
  <div class="container">
    <h4><b>{{ country }}</b></h4>
    <p>Population: {{ population }}</p>
    <p>Region: {{ region }}</p>
    <p>Capital: {{ capital }}</p>
  </div>
</div>
</template>

<script>
    
export default {
    props:['src','country','population','region','capital'],
      data(){
        return{
            imageUrl:'src',
        }
    },
      methods:{
        navigateToCountry() {
          this.$router.push('/country/' + this.country)
        }
  }
}
</script>

<style scoped>
    .card {
  /* Add shadows to create the "card" effect */
  margin-top: 3em;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width:70%;
  margin-left: 5em;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
  background-color: var(--countries--color--light);
}

.container h4{
    text-align:center;
}


@media (min-width:1024px) { 
 .card{
        width: 90%;
        margin-left: 2em;
  }
  
  /* .container{
    width:91%;
  } */
}

</style>