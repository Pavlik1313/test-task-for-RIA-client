<template>
  <div class="list">

    <h1>Підготовлений список адрес</h1>
    <div class="header">

      <div class="number-header"><strong>Номер будинку</strong></div>
      <div class="explanation-header"><strong>Пояснення</strong></div>

    </div>
    <div class="list-content">

      <building-number-block v-for="buildingNumber in buildingNumbers"
                             :key = "buildingNumber"
                             :building-number = "buildingNumber">
      </building-number-block>

    </div>
    <div class="footer">

      <div class="pages-manager">

        <h3>Сторінка: {{page+1}} из {{totalPages+1}}</h3>
        <button class="previous-page-but"
                v-bind:disabled="hasNotPreviousPage"
                @click="previousPage"
        >
          На попередню
        </button>
        <button
            class="next-page-but"
            v-bind:disabled="hasNotNextPage"
            @click="nextPage"
        >
          На наступну
        </button>

      </div>
      <div class="limits-manager">

        <h3>Записів на сторінці:  </h3>
        <select @change="changeLimit" v-bind:value="limit">
          <option value=1000>1000</option>
          <option value=500>500</option>
          <option value=200>200</option>
          <option value=100>100</option>
          <option value=50>50</option>
        </select>
      </div>

    </div>

  </div>

</template>

<script>
import axios from "axios"
import BuildingNumberBlock from "@/components/BuildingNumberBlock";
export default {
  name: "BuildingNumbersList",
  components:{
    BuildingNumberBlock
  },
  data(){
    return {
      buildingNumbers: [],
      page: 0,
      totalPages: 0,
      limit: 1000,
      total: 0,
    }
  },
  computed: {
    hasNotNextPage(){
      return this.page >= this.totalPages;
    },
    hasNotPreviousPage(){
      return this.page <= 0;
    }
  },
  mounted() {
    this.fetchBuildingNumbers()
  },

  methods: {
    changeLimit(event){
      this.limit = parseInt(event.target.value)
      this.page = 0
      this.fetchBuildingNumbers()
    },

    nextPage(){
      this.page++
      this.fetchBuildingNumbers()
    },

    previousPage(){
      this.page--
      this.fetchBuildingNumbers()
    },
    async fetchBuildingNumbers(){
      try {
        const start = this.page*this.limit
        const end = start+this.limit
        const url = `http://localhost:3000/building-numbers?start=${start}&end=${end}`
        console.log(url)
        axios.get(url)
            .then((response)=>{
              this.buildingNumbers = response.data.buildingNumbers
              this.total =  response.data.total
              this.totalPages = Math.floor(this.total/this.limit)
            })
      }catch (e) {
        console.log(e)
        alert("Сталася помилка при заватаженні номерів будинків")
      }
    }
  }
}
</script>

<style scoped>
  .list {
    width: 80%;
    max-width: 800px;
  }
  .header{
    background: linear-gradient(0deg, skyblue 0, white 100%);
    display: flex;
    padding: 3px 20px;
  }
  .number-header{
    width: 30%;
  }
  .explanation-header{
    width: 70%;
  }
  .list-content{
    background: rgba(127,200,255,0.2);
    padding: 5px 10px;
    max-height: 350px;
    overflow: auto;
  }
  .footer{
    background: linear-gradient(180deg, skyblue 0, white 100%);
    display: flex;
    justify-content: space-between;
    padding: 5px 20px;
  }
  .pages-manager, .limits-manager{
    display: flex;
    align-items: center;
  }
  h3 {
    margin-right: 10px;
  }
  h1 {
    margin: 10px 0;
  }
</style>