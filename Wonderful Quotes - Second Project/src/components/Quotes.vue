<template>
  <div class="row">
    <app-single-quote v-for="(quote,index) in quotes" :key="quote" :quotesArr="quotes" @click.native="remove(index)">
      {{quote}}
    </app-single-quote>
  </div>
</template>

<script>
import SingleQuote from "./SingleQuote"

export default {
  components:{
    appSingleQuote: SingleQuote
  },
  props:{
    quotes: Array //this is the array props going to App.vue comp
  },
  data(){
    return{
      max: true
    }
  },
    methods:{
      remove(index){
        this.quotes.splice(index, 1)
      }
    }
}
</script>

<style scoped>

</style>