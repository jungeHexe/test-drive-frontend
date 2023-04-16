<template>
  <div>
    <ContainerPage></ContainerPage>
    <img class="girl-img" src="./assets/girl.png"/>
  </div>
</template>

<script>
import ContainerPage from "@/components/ContainerPage";
import QuoteService from "@/services/quote.service";

export default {
  name: 'App',
  components: {
    ContainerPage,
  },
  created() {
    QuoteService.getRandomQuote()
        .then(value => {
          this.$store.dispatch('setQuote', value);
        });
  }
}
</script>
