<template>
  <div id="app">
    <SearchSuperhero />
    <Superheros/>
  </div>
</template>

<script>
  import SearchSuperhero from "../components/SearchSuperhero";
  import Superheros from "../components/Superheros";

  export default {
    name: 'Home',
    components: {
      SearchSuperhero,
      Superheros
    }
  }
</script>

<style>

</style>
