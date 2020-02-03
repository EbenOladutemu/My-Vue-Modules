<template>
  <div class="container">
    <h2 class="text-center">Better State Management with Vuex</h2>
      <app-counters></app-counters>
      <app-result></app-result>
      <app-another-result></app-another-result>
  </div>
</template>

<script>
import Counters from './components/Counters'
import Result from './components/Result'
import AnotherResult from './components/AnotherResult'

export default {
  components:{
    appCounters: Counters,
    appResult: Result,
    appAnotherResult: AnotherResult
  }
}
</script>
	
<style>

</style>
