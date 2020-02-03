<template>
  <div>
    <p>Another Currently at: {{ mathCounter }} - using getters</p>
    <p>{{ stringCounter }}</p>
   </div>
</template>

<script>
import { mapGetters } from "vuex";
  export default {
    computed:mapGetters([
       'mathCounter',
       'stringCounter'
    ])
  }
</script>