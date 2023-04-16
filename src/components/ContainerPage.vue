<template>
  <div class="container">
    <div class="row justify-content-space-between">
      <SearchBlock @get-weather="searchWeather"/>
      <TimeBlock/>
    </div>
    <div class="row justify-content-left">
      <WeatherBlock :weather="weather"/>
    </div>
    <div class="row justify-content-left">
      <QuoteBlock/>
    </div>
  </div>
</template>

<script>
import TimeBlock from "@/components/TimeBlock";
import QuoteBlock from "@/components/QuoteBlock";
import WeatherBlock from "@/components/WeatherBlock";
import SearchBlock from "@/components/SearchBlock";
import WeatherService from "@/services/weather.service";
export default {
  name: 'ContainerPage',
  emits: ['get-weather'],
  components: {SearchBlock, WeatherBlock, QuoteBlock, TimeBlock},
  data() {
    return {
      weather: '',
    }
  },
  methods: {
    searchWeather(point) {
      WeatherService.getWeatherForPoint(point)
          .then(value => {
             this.weather = JSON.parse(value);
          });
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    margin: 120px;
    display: grid;
    height: calc(100vh - 240px);
  }
</style>
