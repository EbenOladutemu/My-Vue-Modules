<template>
  <div class="container text-center">
    <form>
      <textarea class="form-control" placeholder="Add A Quote" v-model="someText"></textarea>
      <button class="btn btn-success mt-2" @click.prevent="add" :disabled="max()">Add Quote</button>
    </form>
  </div>
</template>

<script>
export default {
  props:{
    quotesArr: Array,
    max: Function
  },
  data(){
    return {
      someText: ''
    }
  },
  methods:{
    add(){
      this.quotesArr.push(this.someText),
      this.someText = ''
    }
  }
}
</script>

<style scoped>

</style>