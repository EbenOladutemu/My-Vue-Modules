<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="card text-center">
          <div class="card-header"><h5>What is the squareroot of 361? </h5></div>
          <div class="card-body">
            <div class="row">
              <div class="col-3">
                <button class="btn btn-primary" v-b-modal.modal-1>{{answerThree}}</button>
              </div>
              <div class="col-3">
                <button class="btn btn-primary" @click="incorrectOne" :class="redBtnOne">{{wrongThree.one}}</button>
              </div>
              <div class="col-3">
                <button class="btn btn-primary" @click="incorrectTwo" :class="redBtnTwo">{{wrongThree.two}}</button>
              </div>
              <div class="col-3">
                <button class="btn btn-primary" @click="incorrectThree" :class="redBtnThree">{{wrongThree.three}}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <b-modal id="modal-1" hide-footer title="Question 3">
        <h3 class="my-4 text-center">Easy peasy!</h3>
        <b-button class="mt-3" variant="outline-success" block @click="correctThree()">Proceed to Question 3</b-button>
      </b-modal>
    </div>
  </div>
</template>

<script>

export default {
  props:['correctThree', 'incorrectOne', 'incorrectTwo', 'incorrectThree',
         'redBtnOne', 'redBtnTwo', 'redBtnThree'],
  data() {
    return {
      answerThree: Math.sqrt(361),
      wrongThree:{
        one: 13.42,
        two: 61,
        three: 17
      } 
    }
  },
  methods:{

    }
  }
</script>
	
<style>
li{
  cursor: pointer;
}
li:hover{
  background-color: lightcoral;
}
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
 