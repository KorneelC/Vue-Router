<template>
    <ul>
        <router-link to="/home" tag="li" active-class="active" exact><a>Home</a> </router-link>
        <router-link to="/voorzieningen" tag="li" active-class="active"><a>Voorzieningen</a></router-link>
        <router-link to="/omgeving" tag="li" active-class="active"><a>Omgeving</a> </router-link>
        <router-link to="/locatie" tag="li" active-class="active"><a>Locatie</a></router-link>
        <router-link to="/contact" tag="li" active-class="active"><a>Contact</a></router-link>
    </ul>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.active {
    background-color: rgb(23, 97, 105);
    height: 5vh;
    display: flex;
    align-items: center;    
}

ul {
  font-family: 'Caveat';
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 5vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  background-color: #60A3AB;
}
li {
    display:inline;
}
a {
    text-decoration: none;
    color:whitesmoke;
    font-weight: bold;
}


</style>