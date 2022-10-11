<template>
  <BuildingNumbersList/>
</template>

<script>
import BuildingNumbersList from "@/components/BuildingNumbersList";

export default {
  name: 'App',
  components: {
    BuildingNumbersList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
