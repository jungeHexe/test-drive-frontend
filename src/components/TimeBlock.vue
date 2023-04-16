<template>
  <div>
    <div class="time">{{ time }}</div>
    <div class="date">{{ getDate }}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        time: (new Date).toLocaleTimeString(),
      }
    },
    created() {
      this.getTime();
    },
    computed: {
      getDate() {
        const date = new Date;
        const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
        return `${days[date.getDay()]}, ${date.toLocaleDateString().slice(0, 5)}`;
      },
    },
    methods: {
      getTime() {
        setInterval(() => {
          this.time = (new Date).toLocaleTimeString();
        }, 1000);
      }
    }
  }
</script>

<style lang="scss" scoped>
  div {
    font-weight: 250;
  }
  .time {
    font-size: 60px;
  }
  .date {
    font-size: 30px;
  }
</style>
