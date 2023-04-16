<template>
  <div class="row">
    <input v-model="search" type="text" placeholder="Введите долготу и широту в десятичных координатах через пробел"/>
    <button @click="searchWeather">Search</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        search: ''
      }
    },
    methods: {
      searchWeather() {
        if (!this.search || !this.validatePoint()) {
          alert('Данные заполнены некорректно. Широта может принимать значения от −90° до +90°, а долгота - от −180° до +180°');
          return;
        }
        this.$emit('get-weather', this.search);
        this.search = '';
      },
      validatePoint() {
        const regexp = /^[-]?[0-9]*[.][0-9]+$/;
        const points = this.search.split(' ');
        if (points.length !== 2) {
          return false;
        }
        if (!(Math.abs(+points[0]) <= 180 && Math.abs(+points[1]) <= 90)) {
          return false;
        }
        return points.map(el => el.match(regexp)).find(el => !el) === undefined;
      }
    }
  }
</script>

<style lang="scss" scoped>
  div {
    width: 80%
  }
  @mixin style {
    background-color: transparent;
    border: 2px solid #FAE4D0;
    box-sizing: border-box;
    border-radius: 10px;
    height: 40px;
    font-size: 20px;
  }
  input {
    @include style;
    width: 80%;
    background-image: url("../assets/search-icon.png");
    background-repeat: no-repeat;
    background-size: 20px;
    background-position-y: center;
    background-position-x: 15px;
    padding: 0 60px;
    color: inherit;
    outline: none;
  }
  input::placeholder {
    color: inherit;
  }
  button {
    @include style;
    width: 100px;
    margin-left: 10px;
    color: inherit;
  }
</style>
