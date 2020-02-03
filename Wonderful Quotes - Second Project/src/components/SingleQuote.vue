<template>
  <div class="card col-3 my-2 mx-2">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      quotesArr: Array //this is the array props going to Quotes.vue comp
    }
  }
</script>

<style scoped>
  .card{
    cursor: pointer;
  }
  .card:hover{
    background-color: rgb(240, 109, 109)
  }
</style>

