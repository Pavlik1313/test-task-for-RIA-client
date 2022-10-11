<template>
    <div class="result-background" v-if="show">

      <div class="result-content" v-bind:class="className">

        <h2>{{buildingNumber}}</h2>
        <h3>{{note}}</h3>
        <h4>{{explanation}}</h4>

        <button
            class="ok-but"
            @click="closeResult"
        >
          Ок
        </button>

      </div>

    </div>
</template>

<script>
import {buildingNumberIsValid, getExplanation} from "@/helpers/validator";

export default {
  name: "ValidationResult",
  props:{
    show: {type:Boolean,
          default: false
    },
    buildingNumber: {
      type: String
    }
  },
  data(){
    return {
      note:"Даний номер будинку - цілком прийнятний",
      explanation: '',
      className: 'valid'
    }
  },
  updated() {
    const isValid = buildingNumberIsValid(this.buildingNumber)
    if (isValid) {
      this.className = 'valid'
      this.note = "Даний номер будинку - цілком прийнятний"
      this.explanation = ''
    }
    else {
      this.note = "Хибний номер будинку"
      this.explanation = getExplanation(this.buildingNumber)
      this.className = 'invalid'
    }
  },
  methods:{
    closeResult(){
      this.$emit("close")
    }
  }
}
</script>

<style scoped>
.result-background{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,.1);
  backdrop-filter: blur(3px);
  display: flex;
  align-items: center;
  justify-content: center;

}
.result-content{
  padding: 20px;
  border-radius: 20px;
}
.valid{
  background: linear-gradient(0deg, rgb(180,255,180) 0, white 100%);
}
.invalid{
  background: linear-gradient(0deg, rgb(255,180,180) 0, white 100%);
}
.ok-but{
  font-size: 24px;
  padding: 5px 30px;
  border: 0;
  border-radius: 10px;
  background: skyblue;
}
</style>