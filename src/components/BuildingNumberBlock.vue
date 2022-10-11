<template>
  <div class="block" v-bind:class="className">
    <div class="number">{{buildingNumber}}</div>
    <div class="explanation">{{ explanation }}</div>
  </div>
</template>

<script>
import {buildingNumberIsValid, getExplanation} from "@/helpers/validator";
export default {
  name: "BuildingNumberBlock",
  data(){
    return {
      explanation: '-',
      className: 'valid'
    }
  },
  created() {
    const isValid = buildingNumberIsValid(this.buildingNumber)
    if (isValid) this.className = 'valid'
    else {
      this.explanation = getExplanation(this.buildingNumber)
      this.className = 'invalid'
    }
  },
  props: {
    buildingNumber: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.block{
  display: flex;
  padding: 3px 20px;
  margin-bottom: 3px;
  border-bottom: 3px solid grey;
  border-radius: 10px;
}
.valid{
  background: rgba(0,255,0,0.1);

}
.invalid{
  background: rgba(255,0,0,0.1);
}
.number{
  width: 30%;
}
.explanation{
  width: 70%;
}

</style>