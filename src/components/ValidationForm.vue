<template>
  <div class="form">
    <h2>Перевірка коректності номера будинку</h2>
    <input
        class="input"
        v-bind:value="buildingNumber"
        @input="inputBuildingNumber"
    >
    <button
        class="validate-but"
        @click="openResult"
    >
      Перeвірити
    </button>
  </div>
  <ValidationResult
      :show = "resultIsOpen"
      :building-number="buildingNumber"
      @close="clotheResult"
  />
</template>

<script>
import ValidationResult from "@/components/ValidationResult";
export default {
  name: "ValidationForm",
  components:{
    ValidationResult
  },
  data(){
    return{
      resultIsOpen: false,
      buildingNumber: ''
    }
  },
  methods:{
    inputBuildingNumber(e){
      this.buildingNumber = e.target.value
    },
    openResult(){
      console.log(this.buildingNumber)
      this.resultIsOpen = true
    },
    clotheResult(){
      this.resultIsOpen = false
    }
  }
}
</script>

<style scoped>
  .form{
    background: linear-gradient(180deg, skyblue 0, white 100%);
    padding: 30px;
    width: 100%;
  }
  h2 {
    margin-top: 0;
  }
  .input{
    font-size: 24px;
    width: 60%;
    border: 2px solid skyblue;
    border-radius:  15px 0 0 15px;
    padding-left: 20px;
  }
  .validate-but{
    font-size: 27px;
    width: 30%;
    background: skyblue;
    border: 0;
    border-radius: 0 15px 15px 0;
  }
</style>