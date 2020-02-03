<template>
  <section>
    <div>
      My baby is big, fluffy, soft, well rounded cheeks
      <button @click="sum++">Increase sum</button>
      <br>{{sum}}
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return{
      sum: 0
    }
  },
  destroyed(){
    console.log('It\'s gone bro! Gone!');
  },
  activated(){
    console.log('Activated bruv!');
  },
  deactivated(){
    console.log('Deactivated brother!');
  },
  methods: {
    
  }
}
</script>

<style scoped>

</style>

