<template>
  <ValidationForm/>
  <BuildingNumbersList/>
</template>

<script>
import BuildingNumbersList from "@/components/BuildingNumbersList";
import ValidationForm from "@/components/ValidationForm";

export default {
  name: 'App',
  components: {
    BuildingNumbersList,
    ValidationForm
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  max-height: 100vh;
}
body{
  margin: 0;
}
</style>
