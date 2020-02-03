<template>
  <div>
    <button class="btn btn-success mr-3" @click="increment">Increase</button>
    <button class="btn btn-danger" @click="decrement">Decrease</button>          
  </div>
</template>

<script>
export default {
  methods:{
    increment(){
      this.$store.state.count++;
    },
    decrement(){
      this.$store.state.count--;
    }
  }
}
</script>