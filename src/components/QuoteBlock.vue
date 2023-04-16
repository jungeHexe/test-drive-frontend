<template>
  <div class="quote-block" v-if="quote">
    <div class="content">
      {{ quote.content }}
    </div>
    <div class="m-20">
      <div class="author">- {{ quote.author }}</div>
    </div>
  </div>
</template>

<script>
  import QuoteService from "@/services/quote.service";

  export default {
   data() {
     return {
       quote: ''
     }
   },
   created() {
     QuoteService.getRandomQuote()
         .then(value => {
           this.quote = value;
         });
   }
  }
</script>

<style lang="scss" scoped>
  .quote-block {
    width: 70%;
    text-align: justify;
  }
  .content {
    height: fit-content;
    font-size: 45px;
  }
  .author {
    font-size: 30px;
  }
  .update-btn {
    background-image: url('../assets/update-icon.png');
    background-size: 100%;
    background-color: transparent;
    border: none;
    width: 30px;
    height: 30px;

    &:active {
      transform: rotate(180deg);
      transition-duration: 0.5s;
    }
  }
  .m-20 {
    margin-top: 20px;
  }
</style>
