<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="card text-center">
          <div class="card-header"><h5>What is 10 multipled by 5?</h5></div>
          <div class="card-body">
            <div class="row">
              <div class="col-3">
                <button class="btn btn-primary" @click="incorrectOne" :class="redBtn.one">{{wrongOne.one}}</button>
              </div>
              <div class="col-3">
                <button class="btn btn-primary" @click="correct" :class="greenBtn">{{answerOne}}</button>
              </div>
              <div class="col-3">
                <button class="btn btn-primary" @click="incorrectTwo" :class="redBtn.two">{{wrongOne.two}}</button>
              </div>
              <div class="col-3">
                <button class="btn btn-primary" @click="incorrectThree" :class="redBtn.three">{{wrongOne.three}}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>

</style>