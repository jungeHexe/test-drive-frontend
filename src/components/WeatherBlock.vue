<template>
  <div v-if="weather" class="weather-block w-70-p row" >
    <img :src="icon" alt="Иконка текущей погоды"/>
     <div>
       <div class="temp">{{ weather.temp }}°C</div>
       <div class="temp-description">{{ weatherCondition }}</div>
     </div>
  </div>
  <span class="f-30 w-70-p" v-else>Укажите координаты вашего местоположения в строке поиска, чтобы узнать погоду :)</span>
</template>

<script>
  import WeatherService from "@/services/weather.service";

  export default {
    props: ['weather'],
    computed: {
      icon() {
        return `https://yastatic.net/weather/i/icons/funky/dark/${this.weather.icon}.svg`
      },
      weatherCondition() {
        return WeatherService.getWeatherCondition(this.weather.condition);
      }
    },
  }
</script>

<style lang="scss" scoped>
  .weather-block {
    padding-left: 50px;
    height: 30vh;

    div {
      margin: auto 30px;
      .temp {
        font-size: 45px;
      }
      .temp-description {
        margin-top: 10px;
        font-size: 30px;
      }
    }
  }
  img {
    height: 200px;
    width: 200px;
    margin: auto 0;
  }
  .f-30 {
    font-size: 30px;
  }
  .w-70-p {
    width: 70%;
  }
</style>
