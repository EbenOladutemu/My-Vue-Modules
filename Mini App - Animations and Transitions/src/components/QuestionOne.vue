<template>
  <div class="container">
    <center>Some</center>
    <div class="row">
      <div class="col-12">
        <div class="card text-center">
          <div class="card-header"><h5>What is 10 multipled by 5?</h5></div>
          <div class="card-body">
            <div class="row">
              <div class="col-3">
                <button class="btn btn-primary" @click="incorrectOne" :class="redBtnOne">{{wrongOne.one}}</button>
              </div>
              <div class="col-3">
                <button class="btn btn-primary" v-b-modal.modal-1>{{answerOne}}</button>
              </div>
              <div class="col-3">
                <button class="btn btn-primary" @click="incorrectTwo" :class="redBtnTwo">{{wrongOne.two}}</button>
              </div>
              <div class="col-3">
                <button class="btn btn-primary" @click="incorrectThree" :class="redBtnThree">{{wrongOne.three}}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <b-modal id="modal-1" hide-footer title="Question 1">
        <h3 class="my-4 text-center">Yaaay!! You got that right!</h3>
        <b-button class="mt-3" variant="outline-success" block @click="correct()">Proceed to Question 2</b-button>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  props:['correct', 'incorrectOne', 'incorrectTwo', 'incorrectThree',
         'redBtnOne', 'redBtnTwo', 'redBtnThree'],
  data() {
    return {
      answerOne: 10 * 5,
      wrongOne:{
        one: 320,
        two: 400,
        three: 54.9
      }
    }
  },
  methods:{

  }
}
</script>
	
<style>
.shutter-enter{

}
.shutter-enter-active{
  animation: shutter-in 1s ease-out forwards;
}
.shutter-leave{

}
.shutter-leave-active{
  animation: shutter-out 1s ease-out forwards;
  position: absolute;
}
.shutter-move{
  transition: transform 1s;
}
@keyframes shutter-in {
  from{
    transform: rotateX(90deg)
  }
  to{
    transform: translateY(0)
  }
}
@keyframes shutter-out {
  from{
    transform: translateY(0)
  }
  to{
    transform: rotateY(-90deg)
  }
}
</style>
