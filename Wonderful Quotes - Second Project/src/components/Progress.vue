<template>
  <div class="container">
    <h3 class="text-center">Wonderful Quotes</h3>
    <p>Quotes Added</p>
    <span v-if="count >= 10 ">{{stop()}}</span>
    <div class="progress mb-3">
      <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" :style="{width: (count/maxQuotes) * 100 + '%'}">
         {{count}}/{{maxQuotes}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    count: Number,
    maxQuotes: Number
  },
  methods:{
    stop(){
      return alert ('Delete A Quote dummy!');
    }
  }
}
</script>